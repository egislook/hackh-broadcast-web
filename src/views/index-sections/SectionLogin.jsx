import React, {Component} from "react";

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
  Col
} from "reactstrap";

// core components

class SectionLogin extends Component {
  render () {
    return (
        <>
          <div
              className="section section-image section-login"
              style={{
                backgroundImage: "url(" + require("../../assets/img/login-image.jpg") + ")"
              }}
          >
            <Container>
              <Row style={{paddingTop: '30px'}}>
                <Col className="mx-auto" lg="4" md="6">
                  <Card className="card-register">
                    <h3 className="title mx-auto">Welcome</h3>
                    <Form className="register-form">
                      <label>Phone Number</label>
                      <InputGroup className="form-group-no-border">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-mobile"/>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Phone number" type="text"/>
                      </InputGroup>
                      <Button
                          block
                          className="btn-round"
                          color="danger"
                          type="button"
                      >
                        Send Message
                      </Button>
                    </Form>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
          {" "}
        </>
    );
  }
}

export default SectionLogin;
