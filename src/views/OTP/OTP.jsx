import React from 'react';
import IndexNavbar from "../../components/Navbars/IndexNavbar.js";
import DemoFooter from "../../components/Footers/DemoFooter.js";

import SectionOTP from "../../views/index-sections/SectionOTP.js";
import SectionDownload from "../../views/index-sections/SectionDownload.js";


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
