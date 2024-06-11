import React, { useState } from 'react';
import Sidebar from '../components/Menu.js';
import Control from '../components/Home/controls.js';
import SelectableRectangles from '../components/Home/selectableRectangle.js';
import CheckboxOptions from '../components/Home/checkboxOptions.js';

const Home = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleToggleSidebar = (isOpen) => {
        setIsSidebarOpen(isOpen);
    };

    return (
        <div className="flex h-screen w-full bg-[#F1F0F3]">
            <Sidebar onToggle={handleToggleSidebar} />
            <div className={`flex-grow transition-all duration-300 ${isSidebarOpen ? 'md:ml-64' : 'ml-0'}`}>
                <div className="w-full h-full flex flex-col justify-start items-center mt-12">
                    <SelectableRectangles/>
                    <Control/>
                    <CheckboxOptions/>
                </div>
            </div>
        </div>
    );
}

export default Home;
