import React from 'react';
import { Button, Input } from 'antd';
import { useTranslation } from 'react-i18next';

const { TextArea } = Input;

const MessageForm = ({ messageProvider = 'telegram', onMessageChange, message = '', onSend, onCancel, className }) => {
  const { t } = useTranslation();
  return (
    <div style={{ height: '80%' }} className={`message-form flex flex-col ${className}`}>
      <div className="message-provider">
        {messageProvider}
      </div>
      <TextArea
        className="flex-grow h-auto p-4 border-2 border-solid border-blue-dark rounded-md"
        style={{ resize: 'none' }}
        autoSize={false}
        value={message}
        onChange={(e) => onMessageChange(e)}
      />
      <div className="message-form__buttons flex flex-row items-center justify-end p-2 pr-0">
        <Button className="m-2 text-blue-dark border-2 border-blue-dark rounded-md hover:text-white hover:bg-blue" onClick={onCancel}>{t('cancel_button')}</Button>
        <Button className="m-2 mr-0 text-white border-2 border-blue-dark bg-blue-dark rounded-md hover:text-white hover:bg-blue" onClick={onSend} type="primary">{t('send_button')}</Button>
      </div>
    </div>
  );
};

export default MessageForm;
