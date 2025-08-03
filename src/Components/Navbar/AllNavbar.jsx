import React from 'react';
import MembarUiNavbar from './MembarUiNavbar';
import MembaResponsiveNavbar from './MembaResponsiveNavbar';

const AllNavbar = () => {
    return (
        <div>
            <div className="mt-6">
                <MembarUiNavbar></MembarUiNavbar>
            </div>
            <div className="mt-6">
                <MembaResponsiveNavbar></MembaResponsiveNavbar>
            </div>
        </div>
    );
};

export default AllNavbar;