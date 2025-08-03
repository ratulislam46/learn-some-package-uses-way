import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Carosel from '../Packages/Carosel/Carosel';

const RootLayout = () => {
    return (
        <div>
            <nav>
                <Navbar></Navbar>
            </nav>
            <main>
                <section>
                    <Carosel></Carosel>
                </section>
            </main>
        </div>
    );
};

export default RootLayout;