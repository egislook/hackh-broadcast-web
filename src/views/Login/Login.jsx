import React, { Component } from 'react';
import { Button, InputNumber, Layout, Card, Form, Alert, Modal } from 'antd';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { withTranslation } from 'react-i18next';
import { UserOutlined } from '@ant-design/icons';
import api from '../../utils/api';
import localization from '../../localization';
import { savePhone as _savePhone } from '../../redux/actions/auth';

const showError = (err) => {
  Modal.error({
    title: err,
    className: 'border-2 border-blue-dark rounded-md p-0',
    okText: localization.t('ok'),
  });
};
class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      phone: '855',
      isLoading: false,
      error: null,
      phoneError: false,
      codeSent: false,
      code: '',
    };
    this.requestOtp = this.requestOtp.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.authenticateOtp = this.authenticateOtp.bind(this);
    this.handleOtpChange = this.handleOtpChange.bind(this);
  }

  async requestOtp() {
    const { phone, phoneError } = this.state;
    if (phoneError) {
      showError(localization.t('invalid_phone'));
      return;
    }
    this.setState({
      isLoading: true,
    });
    try {
      const result = await api.requestOtp(`+${phone}`);
      console.log('result', result);

      const { savePhone } = this.props;
      savePhone(phone);

      this.setState({
        codeSent: true,
        isLoading: false,
      });
    } catch (err) {
      this.setState({
        isLoading: false,
        error: err.response.data,
      });
    }
  }

  async authenticateOtp() {
    const { code, phone } = this.state;
    try {
      const result = await api.authenticateOtp(`+${phone}`, code);
      const { saveAuthToken, history } = this.props;
      await api.login(result.data.data.customToken);
      const token = await api.getIdTokenResult();
      saveAuthToken(token);
      history.push('/');
    } catch (error) {
      console.log('error.response', error.response.data);

      this.setState({
        error: error.response.data,
      });
    }
  }

  handleOtpChange(value) {
    this.setState({
      code: value,
    });
  }

  handleInputChange(value) {
    const { phone } = this.state;
    console.log('!value || value.length < 11', !value || value.length < 11);
    console.log('phone', phone);

    this.setState({
      phone: value ? `${value}` : '855',
      phoneError: !phone || phone.length < 11,
    });
  }

  render() {
    const { phone, isLoading, code, error, phoneError, codeSent } = this.state;
    const { t } = this.props;
    return (
      <Layout
        style={{ minHeight: '100vh', backgroundImage: 'url(/login-image.jpg)' }}
        className="flex flex-grow justify-center items-center"
      >
        {
                    !codeSent ? (
                      <Card
                        style={{ width: 500, minHeight: '38vh' }}
                        className="flex flex-col"
                      >
                        <h1 className="py-1 pb-4 text-xl" style={{ fontSize: '1.825em', fontWeight: 'bold' }}>{t('app_title')}</h1>
                        <h3 className="py-1 pb-6 text-lg" style={{ fontSize: '1.825em', fontWeight: 'bold' }}>{t('login_with_phone')}</h3>
                        <Form
                          className="flex flex-grow flex-col"
                        >

                          <InputNumber
                            prefix={<UserOutlined className="site-form-item-icon" />}
                            className="py-1 w-full"
                            placeholder={t('phone_placeholder')}
                            name="phone"
                            defaultValue="855"
                            maxLength="13"
                            value={phone}
                            type="text"
                            onChange={this.handleInputChange}
                          />

                          <Button
                            className="btn-round my-2 flex flex-grow items-center justify-center"
                            type="button"
                            onClick={this.requestOtp}
                            loading={isLoading}
                          >
                            {t('send_code')}
                          </Button>
                          {
                                    phoneError && <Alert className="my-2" message={t('invalid_phone')} type="warning" showIcon banner closable />
                                }
                          {
                                        error && <Alert className="my-2" message={error.message} type="warning" showIcon banner closable />
                                    }
                        </Form>

                      </Card>
                    ) : (
                      <Card
                        style={{ width: 500, minHeight: '38vh' }}
                        className="flex flex-col"
                      >
                        <h1 className="py-1 pb-4 text-xl" style={{ fontSize: '1.825em', fontWeight: 'bold' }}>{t('app_title')}</h1>
                        <h3 className="py-1 pb-6 text-lg" style={{ fontSize: '1.825em', fontWeight: 'bold' }}>{t('enter_otp')}</h3>

                        <Form
                          className="flex flex-grow flex-col"
                        >

                          <InputNumber
                            prefix={<UserOutlined className="site-form-item-icon" />}
                            className="py-1 w-full"
                            placeholder={t('otp_placeholder')}
                            name="code"
                            defaultValue="855"
                            maxLength="13"
                            value={code}
                            type="text"
                            onChange={this.handleOtpChange}
                          />

                          <Button
                            className="btn-round my-2 flex flex-grow items-center justify-center"
                            type="button"
                            onClick={this.authenticateOtp}
                            loading={isLoading}
                          >
                            {t('login')}
                          </Button>
                          {
                                        error && <Alert className="my-2" message={error.message} type="error" showIcon banner closable />
                                    }
                        </Form>

                      </Card>
                    )
                }
      </Layout>
    );
  }
}
const mapStateToProps = (state) => ({ auth: state.auth });

const mapDispatchToProps = (dispatch) => ({
  savePhone: (phone) => {
    dispatch(_savePhone(phone));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(withRouter(Login)));
