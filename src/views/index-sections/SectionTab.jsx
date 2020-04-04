import React, {Component, useState, useCallback } from "react";
import { TabContent, TabPane, Nav, NavItem, Button, Row, Col, Media} from 'reactstrap';
import classnames from 'classnames';
import './SectionTab.scss';
import Icon from "@ant-design/icons";


const SectionTab = () => {

    const [activeTab, setActiveTab] = useState('1');
    const [isLoading, setIsLoading] = useState(false);

    const toggle = (tab) => {
        if (activeTab !== tab) {
            setActiveTab(tab);
        }
    };

    return (
            <div className="main-section-tab">
                <Row>
                <Col xs="6" sm="4" md="4" className="section-cols">
                    <Nav tabs vertical pills>
                        <NavItem>
                            <Button
                                className={classnames('toggleButton', {active: activeTab === '1'})}
                                onClick={() => {
                                    toggle('1');
                                }}
                            >
                                <Row className="section-sub-row">
                                    <Col lg="3" className="section-sub-col-left">
                                        <span>
                                            <Icon component={() => (<img src="/telegram.svg" alt="telegram" />)} />
                                        </span>
                                        <p className="section-sub-p">10:00</p>
                                        <p className="section-sub-p">11-04-2020</p>
                                    </Col>
                                    <Col lg="9" className="section-sub-col-right">Column</Col>
                                </Row>
                            </Button>
                        </NavItem>
                        <NavItem>
                            <Button
                                className={classnames('toggleButton', {active: activeTab === '2'})}
                                onClick={() => {
                                    toggle('2');
                                }}
                            >
                                Tab 2
                            </Button>
                        </NavItem>
                        <NavItem>
                            <Button
                                className={classnames('toggleButton', {active: activeTab === '3'})}
                                onClick={() => {
                                    toggle('3');
                                }}
                            >
                                Tab 3
                            </Button>
                        </NavItem>
                    </Nav>
                </Col>
                <Col xs="6" sm="6" md="6" className="section-cols section-cols-right">
                    <TabContent activeTab={activeTab}>
                        <TabPane tabId="1">
                            <h4>Tab 1 Contents</h4>
                        </TabPane>
                        <TabPane tabId="2">
                            <h4>Lorem lkdsjfa;lskjdf</h4>
                        </TabPane>
                        <TabPane tabId="3">
                            <h4>Tab 3 Contents</h4>
                        </TabPane>
                    </TabContent>
                </Col>
            </Row>
            </div>
        )
}

export default SectionTab;
