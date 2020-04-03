import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import SiderLayout from '../../components/Sider/SiderLayout';
import MessageForm from '../../components/MessageForm/MessageForm';
import VirtualDevice from '../../components/VirtualDevice/VirtualDevice';
import { SEND_MESSAGE_TELEGRAM, RESET_MESSAGE } from '../../redux/types/types';

const Home = () => {
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();

  return (
    <SiderLayout>
      <div className="content flex flex-row h-full">
        <MessageForm
          className="flex-grow p-4"
          messageProvider=""
          onMessageChange={(e) => setMessage(e.target.value)}
          message={message}
          onSend={() => dispatch({ type: SEND_MESSAGE_TELEGRAM, payload: message })}
          onCancel={() => dispatch({ type: RESET_MESSAGE })}
        />
        <VirtualDevice
          className="flex-grow p-4"
        />
      </div>
    </SiderLayout>
  );
};

export default Home;
