/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';


// reactstrap components
import {
  Button,
  Card,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from 'reactstrap';
import { withRouter } from 'react-router';
import { saveAuthToken as _saveAuthToken } from '../../redux/actions/auth';
import api from '../../utils/api';

// core components

class OTP extends Component {
  constructor(props) {
    super(props);

    this.state = {
      code: '',
    };
    this.authenticateOtp = this.authenticateOtp.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  async authenticateOtp() {
    const { auth } = this.props;
    const { code } = this.state;
    try {
      const result = await api.authenticateOtp(auth.phone, code);
      console.log('authenticateOtp', result);
      console.log('result.data.data.customToken', result.data.data.customToken);
      const { saveAuthToken, history } = this.props;
      await api.login(result.data.data.customToken);
      const token = await api.getIdTokenResult();
      console.log('token', token);
      saveAuthToken(token);
      history.push('/');
    } catch (error) {
      console.log('error', error);
    }
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { code } = this.state;
    return (
      <div
        className="section section-image section-login"
        style={{
          backgroundImage: 'url(/login-image.jpg)',
        }}
      >
        <Container>
          <Row style={{ paddingTop: '30px' }}>
            <Col className="mx-auto" lg="4" md="6">
              <Card className="card-register">
                <h3 className="title mx-auto" style={{ fontSize: '1.825em', fontWeight: 'bold' }}>Please input your OTP</h3>
                <Form className="register-form">
                  <label>OTP</label>
                  <InputGroup className="form-group-no-border">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="nc-icon nc-mobile" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="OTP" type="number" name="code" value={code} onChange={this.handleInputChange} />
                  </InputGroup>
                  <Button
                    block
                    onClick={this.authenticateOtp}
                    className="btn-round"
                    color="danger"
                    type="button"
                  >
                    Login
                  </Button>
                </Form>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ auth: state.auth });

const mapDispatchToProps = (dispatch) => ({
  saveAuthToken: (token) => {
    dispatch(_saveAuthToken(token));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(OTP));
