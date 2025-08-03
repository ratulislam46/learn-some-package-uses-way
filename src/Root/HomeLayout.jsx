import React from 'react';
import Carosel from '../Packages/Carosel/Carosel';
import Mood from '../Packages/Mood/Mood';

const HomeLayout = () => {
    return (
        <div>
            <div className="mt-6">
                <Carosel></Carosel>
            </div>
            <div className="mt-6">
                <Mood></Mood>
            </div>
        </div>
    );
};

export default HomeLayout;