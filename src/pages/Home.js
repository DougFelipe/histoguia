import React, { useState } from 'react';
import Sidebar from '../components/Menu.js';
import SearchBar from '../components/Home/SearchBar.js';
import HorizontalScroll from '../components/Home/HorizontalScroll.js';
import LineChart from '../components/Home/LineChart.js';
import Card from '../components/Home/Card.js';


const Home = () => {    
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleToggleSidebar = (isOpen) => {
        setIsSidebarOpen(isOpen);
    };

    return (
        <div className="flex h-full w-full  bg-[#F1F0F3]">
            <Sidebar onToggle={handleToggleSidebar} />
            
            <div className={`flex-grow flex flex-col justify-center items-center transition-all duration-300 ${isSidebarOpen ? 'md:ml-64' : 'ml-0'}`}>
                {/* ajustar */}
                {/* <HorizontalScroll/> */}
                <div className="flex justify-between items-center hidden md:flex mt-12 w-11/12 text-white ">
                    <Card/>
                    <LineChart />
                </div>
                <div className='w-11/12 hidden md:flex justify-end items-end mt-5'>
                    <a href='/estatistic' className='pointer text-primary underline text-[20px]'>Ver mais</a>
                </div>
                <div className="w-full h-auto flex flex-col justify-start items-center mt-6">
                    <SearchBar />
                </div>
            </div>
        </div>
    );
}

export default Home;