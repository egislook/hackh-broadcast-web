import React from 'react';
import IndexNavbar from "../../components/Navbars/IndexNavbar.js";
import DemoFooter from "../../components/Footers/DemoFooter.js";

import SectionOTP from "../index-sections/SectionOTP.jsx";
import SectionDownload from "../index-sections/SectionDownload.jsx";


function OTP() {
    document.documentElement.classList.remove("nav-open");
    React.useEffect(() => {
        document.body.classList.add("index");
        return function cleanup() {
            document.body.classList.remove("index");
        };
    });
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

export default OTP;
