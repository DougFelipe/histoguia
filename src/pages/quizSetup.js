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
                    <SelectableRectangles />
                    <Control />
                    <CheckboxOptions />
                    <a
                        href='/quiz'
                        type="submit"
                        className="ml-3 px-16 py-4 bg-primary  text-white rounded-[28px] mt-8 hover:bg-[#3D2E7C]"
                    >
                        Iniciar Quiz
                    </a>
                </div>
            </div>
        </div>
    );
}

export default QuizSetup;
