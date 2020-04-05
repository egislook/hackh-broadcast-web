import React, { Component } from 'react';
import IndexNavbar from '../../components/Navbars/IndexNavbar.js';
import DemoFooter from '../../components/Footers/DemoFooter.js';

import SectionOTP from '../index-sections/SectionOTP.jsx';
import SectionDownload from '../index-sections/SectionDownload.jsx';


class OTP extends Component {
  render() {
    return (
      <>
        <IndexNavbar />
        <div className="main">
          <SectionOTP />
          <SectionDownload />
          <DemoFooter />
        </div>
      </>
    );
  }
}

export default OTP;
