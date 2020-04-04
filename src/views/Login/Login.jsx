import React from 'react';
import IndexNavbar from "../../components/Navbars/IndexNavbar.js";
import DemoFooter from "../../components/Footers/DemoFooter.js";

import SectionLogin from "../../views/index-sections/SectionLogin.js";
import SectionDownload from "../../views/index-sections/SectionDownload.js";


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
