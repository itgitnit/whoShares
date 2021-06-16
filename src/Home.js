import React from 'react';
import web from "../src/images/img5.png";
import Common from './Common';

const Home = () => {
    return (
        <>
            <Common name="Grow your knowledge"
                description="Your only share makes a person's life easier"
                imgsrc={web}
                visit="/service"
                btname="Start Sharing" />
        </>
    );
};
export default Home;
