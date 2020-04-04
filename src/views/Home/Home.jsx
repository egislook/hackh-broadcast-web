/* eslint-disable import/no-named-as-default-member */
import React, { useState, useCallback } from 'react';
// import { useDispatch } from 'react-redux';
import SiderLayout from '../../components/Sider/SiderLayout';
import MessageForm from '../../components/MessageForm/MessageForm';
import VirtualDevice from '../../components/VirtualDevice/VirtualDevice';
import API from '../../utils/api';


const Home = () => {
  const [message, setMessage] = useState('');
  const [, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = useCallback(async () => {
    if (isLoading) {
      return;
    }
    setIsLoading(true);
    try {
      const result = await API.sendMessage({ text: message });
      console.log('save data for history?', result);
      console.log('or trigger fetch messages');

      setIsLoading(false);
      setError(null);
      setMessage('');
    } catch (err) {
      setError(err);
      setIsLoading(false);
    }
  }, [isLoading, message]);
  return (
    <SiderLayout>
      <div className="content flex flex-row h-full">
        <MessageForm
          className="flex-grow p-4"
          messageProvider=""
          onMessageChange={(e) => setMessage(e.target.value)}
          message={message}
          onSend={sendMessage}
          onCancel={() => setMessage('')}
          disabled={isLoading}
        />
        <VirtualDevice
          className="flex-grow p-4"
        />
      </div>
    </SiderLayout>
  );
};

export default Home;
