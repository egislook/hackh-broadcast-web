import React, {Component} from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';


class SectionTab extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1'
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    render() {
        return (
            <div style={{ padding: 50 }}>
                <Row>
                <Col xs="6" sm="4" md="4">
                    <Nav tabs vertical pills>
                        <NavItem>
                            <Button
                                className={classnames({active: this.state.activeTab === '1'})}
                                onClick={() => {
                                    this.toggle('1');
                                }}
                            >
                                Tab1
                            </Button>
                        </NavItem>
                        <NavItem>
                            <Button
                                className={classnames({active: this.state.activeTab === '2'})}
                                onClick={() => {
                                    this.toggle('2');
                                }}
                            >
                                Tab 2
                            </Button>
                        </NavItem>
                    </Nav>
                </Col>
                <Col xs="6" sm="6" md="6">
                    <TabContent activeTab={this.state.activeTab}>
                        <TabPane tabId="1">
                            <h4>Tab 1 Contents</h4>
                        </TabPane>
                        <TabPane tabId="2">
                            <h4>Tab 2 Contents</h4>
                        </TabPane>
                    </TabContent>
                </Col>
            </Row>
            </div>
        )
    }
}

export default SectionTab;
