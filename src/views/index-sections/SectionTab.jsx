import React, { useState, useCallback, useEffect } from 'react';
import { TabContent, TabPane, Nav, NavItem, Button, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import moment from 'moment';
import './SectionTab.scss';
import Icon from '@ant-design/icons';
import { Modal, Spin } from 'antd';
import API from '../../utils/api';
import localization from '../../localization';


const error = (err) => {
  Modal.error({
    title: localization.t('Something went wrong'),
    content: err.message,
    className: 'border-2 border-blue-dark rounded-md p-0',
    okText: localization.t('ok'),
  });
};

const SectionTab = () => {
  const [allMessages, setAllMessage] = useState([]);
  const [, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('1');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = useCallback(async () => {
    try {
      const data = await API.fetchAllMessages();
      console.log('data', data);
      setIsLoading(false);
      setError(null);
      setAllMessage(data);
    } catch (err) {
      setError(err);
      error(err);
      setIsLoading(false);
    }
  }, [isLoading, allMessages]);

  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  return (
    isLoading ? (
      <div className="section-spinner">
        <Spin />
      </div>
    ) : (
      <div className="main-section-tab">
        <Row>
          <Col xs="6" sm="4" md="4" className="section-cols section-cols-scroll">
            <Nav tabs vertical pills>
              {(
                allMessages.map((item, index) => (
                  <NavItem className="section-nav-item" key={index.toString}>
                    <Button
                      className={classnames('toggleButton', { active: activeTab === index.toString() })}
                      onClick={() => {
                        toggle(index.toString());
                      }}
                    >
                      <Row className="section-sub-row">
                        <Col lg="3" className="section-sub-col-left">
                          <Icon component={() => (<img src="/telegram.svg" alt="telegram" />)} />
                          <p className="section-sub-p">{moment(item.date).format('HH:mm')}</p>
                          <p className="section-sub-p">{moment(item.date).format('DD-MM-YYYY')}</p>
                        </Col>
                        <Col lg="9" className="section-sub-col-right">
                          <p className="section-sub-p section-sub-p-overflow text-black">{item.message}</p>
                        </Col>
                      </Row>
                    </Button>
                  </NavItem>
                ))
            )}
            </Nav>
          </Col>
          <Col xs="6" sm="6" md="6" className="section-cols section-cols-right">
            <TabContent activeTab={activeTab}>
              {(
                allMessages.map((item, index) => (
                  <TabPane tabId={index.toString()} key={index.toString()}>
                    <div className="section-tab-container">
                      <Row>
                        <Col lg="2">
                          <Icon style={{ fontSize: '10' }} component={() => (<img src="/telegram.svg" alt="telegram" />)} />
                        </Col>
                        <Col lg="1">
                          <p className="section-sub-p" />
                        </Col>
                        <Col lg="2">{localization.t('text_message')}</Col>
                        <Col lg="4">
                          <p className="section-sub-p">{moment(item.date).format('HH:mm DD-MM-YYYY')}</p>
                        </Col>
                      </Row>
                      <hr className="my-2" style={{ borderColor: '#000', fontSize: '2px', borderTopWidth: '2px' }} />
                      <p className="section-sub-p section-sub-scroll">{item.message}</p>
                    </div>
                  </TabPane>
                ))
            )}
            </TabContent>
          </Col>
        </Row>
      </div>
    )
  );
};

export default SectionTab;
