/* eslint-disable import/no-named-as-default-member */
import React, { useState, useCallback, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
import { Modal } from 'antd';
import SiderLayout from '../../components/Sider/SiderLayout';
import MessageForm from '../../components/MessageForm/MessageForm';
import PhoneSimulator from '../../components/PhoneSimulator/phoneSimulator';
import API from '../../utils/api';
import localization from '../../localization';
import { TELEGRAM, MESSENGER, SMS } from '../../utils/constants';


const error = (err) => {
  Modal.error({
    title: localization.t('Something went wrong'),
    content: err.message,
    className: 'border-2 border-blue-dark rounded-md p-0',
    okText: localization.t('ok'),
  });
};
const info = (sendMessage, cancelSend) => {
  Modal.confirm({
    title: localization.t('Are you sure you want to send'),
    onOk() {
      sendMessage();
    },
    onCancel() {
      cancelSend();
    },
    className: 'border-2 border-blue-dark rounded-md p-0',
    okText: localization.t('ok'),
    cancelText: localization.t('cancel'),

  });
};

const Messenger = () => {
  const messageProvider = 'messenger';

  const [message, setMessage] = useState('');
  const [, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [messageProviderLabel, setMessageProviderLabel] = useState('');
  const [messageProviderIcon, setMessageProviderIcon] = useState('');
  const [maxChar, setMaxChar] = useState(100);
  const [template, setTemplate] = useState('');
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  useEffect(() => {
    if (messageProvider === TELEGRAM.key) {
      setMessageProviderLabel(TELEGRAM.label);
      setMessageProviderIcon(TELEGRAM.icon);
      setMaxChar(TELEGRAM.maxChar);
      setTemplate(TELEGRAM.template);
    } else if (messageProvider === MESSENGER.key) {
      setMessageProviderLabel(MESSENGER.label);
      setMessageProviderIcon(MESSENGER.icon);
      setMaxChar(MESSENGER.maxChar);
      setTemplate(MESSENGER.template);
    } else if (messageProvider === SMS.key) {
      setMessageProviderLabel(MESSENGER.label);
      setMessageProviderIcon(MESSENGER.icon);
      setMaxChar(SMS.maxChar);
      setTemplate(SMS.template);
    }


    return () => {
      setMessageProviderLabel('');
      setMessageProviderIcon('');
      setMaxChar(100);
      setTemplate('');
    };
  }, [messageProvider]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (showSuccessAlert) {
        setShowSuccessAlert(false);
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [showSuccessAlert]);


  const sendMessage = useCallback(async () => {
    if (isLoading) {
      return;
    }
    setIsLoading(true);
    try {
      const messageId = await postMessage({ message });
      const result = await API.sendMessageOnMessenger({ messageId });
      // const result = await API.sendMessage({ messageId: messageResult });
      console.log('save data for history?', result);
      console.log('or trigger fetch messages');

      setIsLoading(false);
      setError(null);
      setMessage('');
      setShowSuccessAlert(true);
    } catch (err) {
      setError(err);
      error(err);
      setIsLoading(false);
    }
  }, [isLoading, message]);

  const postMessage = useCallback(async (object) => {
    try {
      const data = await API.postNewMessage({ message: object.message });
      setIsLoading(false);
      setError(null);
      return data;
    } catch (err) {
      setError(err);
      error(err);
      setIsLoading(false);
    }
  }, []);

  const cancelSend = useCallback(() => {
    setIsLoading(false);
    setIsLoading(false);
    setError(null);
  }, []);

  const messenger = {
    messageProviderLabel,
    messageProviderIcon,
    maxChar,
    template,
  };
  return (
    <SiderLayout>
      <div className="content flex flex-row h-full">
        <MessageForm
          className="flex-grow p-4"
          messenger={messenger}
          onMessageChange={(e) => setMessage(e.target.value)}
          message={message}
          onSend={() => info(sendMessage, cancelSend)}
          onCancel={() => setMessage('')}
          disabled={isLoading}
          isSuccess={showSuccessAlert}
        />
        <PhoneSimulator
          className="flex-grow p-4"
          type={messageProvider}
          messages={message}
        />
      </div>
    </SiderLayout>
  );
};

export default Messenger;
