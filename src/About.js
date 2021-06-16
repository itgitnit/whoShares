import React from 'react';
import web from "../src/images/img6.png";
import Common from './Common';

const About = () => {
    return (
        <>
            <Common name="Welcome to about section"
                description="We make student life little bit easier"
                imgsrc={web}
                visit="/contact"
                btname="Request" />
        </>
    );
};
export default About;
