import React, { Component } from 'react';
import IndexNavbar from '../../components/Navbars/IndexNavbar.js';
import DemoFooter from '../../components/Footers/DemoFooter.js';

import SectionLogin from '../index-sections/SectionLogin.jsx';
import SectionDownload from '../index-sections/SectionDownload.jsx';


class Login extends Component {
  render() {
    return (
      <>
        <IndexNavbar />
        <div className="main">
          <SectionLogin />
          <SectionDownload />
          <DemoFooter />
        </div>
      </>
    );
  }
}

export default Login;
