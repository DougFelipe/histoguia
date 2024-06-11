import React, { useState } from 'react';
import Sidebar from '../components/Menu.js';
import Control from '../components/QuizSetup/controls.js';
import SelectableRectangles from '../components/QuizSetup/selectableRectangle.js';
import CheckboxOptions from '../components/QuizSetup/checkboxOptions.js';

const QuizSetup = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleToggleSidebar = (isOpen) => {
        setIsSidebarOpen(isOpen);
    };

    return (
        <div className="flex h-full w-full bg-[#F1F0F3]">
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

export default QuizSetup;
