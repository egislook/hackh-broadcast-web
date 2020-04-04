/* eslint-disable import/no-named-as-default-member */
import React, { useState, useCallback } from 'react';
// import { useDispatch } from 'react-redux';
import SiderLayout from '../../components/Sider/SiderLayout';
import MessageForm from '../../components/MessageForm/MessageForm';
import VirtualDevice from '../../components/VirtualDevice/VirtualDevice';
import API from '../../utils/api';

import SectionTab from "../index-sections/SectionTab.jsx";


const Outbox = () => {
    return (
        <SiderLayout>
            <div className="content flex flex-row h-full">
                <SectionTab />
            </div>
        </SiderLayout>
    );
};

export default Outbox;
