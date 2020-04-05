import React, { Component } from 'react';
import { Button, InputNumber, Layout, Card, Form } from 'antd';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { withTranslation } from 'react-i18next';
import { UserOutlined } from '@ant-design/icons';
import api from '../../utils/api';
import { savePhone as _savePhone } from '../../redux/actions/auth';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      phone: '855',
      isLoading: false,
      error: null,
    };
    this.requestOtp = this.requestOtp.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  async requestOtp() {
    const { phone, isLoading } = this.state;
    this.setState({
      isLoading: true,
    });
    try {
      const result = await api.requestOtp(phone);
      console.log('requestOtp:result', result);

      const { savePhone, history } = this.props;
      savePhone(phone);

      history.push('/otp');
    } catch (error) {
      this.setState({
        isLoading: false,
        error,
      });
      console.log('error', error);
    }
  }

  handleInputChange(value) {
    this.setState({
      phone: value ? `${value}` : '855',
    });
  }

  render() {
    const { phone, isLoading, error } = this.state;
    const { t } = this.props;
    return (
      <Layout
        style={{ minHeight: '100vh', backgroundImage: 'url(/login-image.jpg)' }}
        className="flex flex-grow justify-center items-center"
      >
        <Card
          style={{ width: 500 }}
          className="flex flex-col"
        >
          <Form
            className="flex flex-grow flex-col"
          >
            <h1 className="py-1 text-xl" style={{ fontSize: '1.825em', fontWeight: 'bold' }}>{t('app_title')}</h1>
            <h3 className="py-1 text-lg" style={{ fontSize: '1.825em', fontWeight: 'bold' }}>Login with your phone number</h3>

            <InputNumber
              prefix={<UserOutlined className="site-form-item-icon" />}
              className="py-1 w-full"
              placeholder="Phone number"
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
              Send Message
            </Button>
          </Form>

        </Card>
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
