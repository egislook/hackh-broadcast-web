import React from 'react';
import IndexNavbar from "../../components/Navbars/IndexNavbar.js";
import DemoFooter from "../../components/Footers/DemoFooter.js";

import SectionLogin from "../index-sections/SectionLogin.jsx";
import SectionDownload from "../index-sections/SectionDownload.jsx";


function Login() {
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
                <SectionLogin />
                <SectionDownload />
                <DemoFooter />
            </div>
        </>
    );
}

export default Login;
