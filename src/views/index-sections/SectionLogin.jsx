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
import api from '../../utils/api';
import { savePhone as _savePhone } from '../../redux/actions/auth';


// core components

class SectionLogin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      phone: '',
    };
    this.requestOtp = this.requestOtp.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  async requestOtp() {
    const { phone } = this.state;
    try {
      const result = await api.requestOtp(phone);
      console.log('requestOtp:result', result);

      const { savePhone, history } = this.props;
      savePhone(phone);
      history.push('/otp');
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
    const { phone } = this.state;
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
                <h3 className="title mx-auto" style={{ fontSize: '1.825em', fontWeight: 'bold'}}>Welcome</h3>
                <Form className="register-form">
                  <label>Phone Number</label>
                  <InputGroup className="form-group-no-border">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="nc-icon nc-mobile" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Phone number" name="phone" value={phone} type="text" onChange={this.handleInputChange} />
                  </InputGroup>
                  <Button
                    block
                    className="btn-round"
                    color="danger"
                    type="button"
                    onClick={this.requestOtp}
                  >
                    Send Message
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
  savePhone: (phone) => {
    dispatch(_savePhone(phone));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SectionLogin));
