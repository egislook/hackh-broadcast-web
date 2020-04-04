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
                <Col xs="6" sm="4" md="4" className="section-cols section-cols-scroll">
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
                                        <Icon component={() => (<img src="/telegram.svg" alt="telegram" />)} />
                                        <p className="section-sub-p">10:00</p>
                                        <p className="section-sub-p">11-04-2020</p>
                                    </Col>
                                    <Col lg="9" className="section-sub-col-right">
                                        <p className="section-sub-p text-black">Title</p>
                                        <p className="section-sub-p text-black">kdjf;lskdjfl;aksjdf;lkjas; lkfjs;kjdfasd</p>
                                    </Col>
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
                                <Row className="section-sub-row">
                                    <Col lg="3" className="section-sub-col-left">
                                        <Icon component={() => (<img src="/telegram.svg" alt="telegram" />)} />
                                        <p className="section-sub-p">10:00</p>
                                        <p className="section-sub-p">11-04-2020</p>
                                    </Col>
                                    <Col lg="9" className="section-sub-col-right">
                                        <p className="section-sub-p text-black">Title</p>
                                        <p className="section-sub-p text-black">kdjf;lskdjfl;aksjdf;lkjas; lkfjs;kjdfasd</p>
                                    </Col>
                                </Row>
                            </Button>
                        </NavItem>
                        <NavItem>
                            <Button
                                className={classnames('toggleButton', {active: activeTab === '3'})}
                                onClick={() => {
                                    toggle('3');
                                }}
                            >
                                <Row className="section-sub-row">
                                    <Col lg="3" className="section-sub-col-left">
                                        <Icon component={() => (<img src="/telegram.svg" alt="telegram" />)} />
                                        <p className="section-sub-p">10:00</p>
                                        <p className="section-sub-p">11-04-2020</p>
                                    </Col>
                                    <Col lg="9" className="section-sub-col-right">
                                        <p className="section-sub-p text-black">Title</p>
                                        <p className="section-sub-p text-black">kdjf;lskdjfl;aksjdf;lkjas; lkfjs;kjdfasd</p>
                                    </Col>
                                </Row>
                            </Button>
                        </NavItem>
                    </Nav>
                </Col>
                <Col xs="6" sm="6" md="6" className="section-cols section-cols-right">
                    <TabContent activeTab={activeTab}>
                        <TabPane tabId="1">
                            <div className="section-tab-container">
                                <Row>
                                    <Col lg="2">
                                        <Icon component={() => (<img src="/telegram.svg" alt="telegram" />)} />
                                    </Col>
                                    <Col lg="1">
                                        <p className="section-sub-p">Text Message</p>
                                    </Col>
                                    <Col lg="1"></Col>
                                    <Col lg="4">
                                        <p className="section-sub-p">11:00 03-04-2020</p>
                                    </Col>
                                </Row>
                                <hr className="my-2" style={{ borderColor: '#000', fontSize: "2px", borderTopWidth: '2px' }} />
                                <p className="section-sub-p">Dear Citizen
                                kdjfsakdfj
                                kl;dsjfslkdfjas;lkdjf
                                sd;klfjas;dkfj
                                </p>
                            </div>
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
