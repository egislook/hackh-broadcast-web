import React from 'react';
import { Button, Input, Alert } from 'antd';
import { useTranslation } from 'react-i18next';


const { TextArea } = Input;

const MessageProvider = ({ messageProviderIcon, messageProviderLabel }) => (
  <div className="message-provider flex flex-row justify-start items-center">
    <img className="p-2" src={messageProviderIcon} alt={messageProviderLabel} />
    <p className="p-2 font-semibold">{messageProviderLabel}</p>
  </div>
);

const MessageForm = ({ messenger, onMessageChange, message = '', onSend, onCancel, className, isSuccess, disabled }) => {
  const { t } = useTranslation();
  const { messageProviderLabel, messageProviderIcon, maxChar } = messenger;

  return (
    <div style={{ height: '80%' }} className={`message-form flex flex-col ${className}`}>
      {
        isSuccess && <Alert className="mb-2" message={t('Message sent')} type="success" showIcon banner closable />
      }

      <div className="message-provider">
        <MessageProvider
          messageProviderLabel={messageProviderLabel}
          messageProviderIcon={messageProviderIcon}
        />
      </div>

      <div className="textarea-container flex-grow h-auto relative">
        <TextArea
          autoSize
          className="h-full w-full p-4 pt-6 border-2 border-solid border-blue-dark rounded-md"
          style={{ resize: 'none' }}
          value={message}
          maxLength={maxChar}
          onChange={(e) => onMessageChange(e)}
          disabled={disabled}
          placeholder={t('send message', { provider: messageProviderLabel })}
        />
        <div className="characters-counter top-0 right-0 mt-2 mr-2 absolute">
          {`${message.length}/${maxChar}`}
        </div>
      </div>
      <div className="message-form__buttons flex flex-row items-center justify-end p-2 pr-0">
        <Button
          className="m-2 text-blue-dark border-2 border-blue-dark rounded-md hover:text-white hover:bg-blue"
          onClick={onCancel}
          disabled={disabled}
        >
          {t('cancel')}

        </Button>
        <Button
          className="m-2 mr-0 text-white border-2 border-blue-dark bg-blue-dark rounded-md hover:text-white hover:bg-blue"
          onClick={onSend}
          type="primary"
          disabled={disabled || !message}
        >
          {t('send')}

        </Button>
      </div>
    </div>
  );
};

export default MessageForm;
