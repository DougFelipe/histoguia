import React, { useState } from 'react';


const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button
                onClick={toggleSidebar}
                className="m-4 p-2 text-white rounded-lg focus:outline-none"
            >
                <svg width="25" height="19" viewBox="0 0 25 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="1.4" y1="1.6" x2="23.5243" y2="1.6" stroke="#140B2A" stroke-width="2.8" stroke-linecap="round" />
                    <line x1="1.84683" y1="9.44165" x2="13.2685" y2="9.50401" stroke="#140B2A" stroke-width="2.8" stroke-linecap="round" />
                    <line x1="2.13315" y1="16.9945" x2="22.7913" y2="16.9945" stroke="#140B2A" stroke-width="2.8" stroke-linecap="round" />
                </svg>
            </button>

            <div
                className={`fixed top-0 left-0 h-full w-64 bg-[#140B2A] shadow-lg transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    } transition-transform duration-300`}
            >
                
                <div className="flex items-center justify-between p-4 bg-[#140B2A] text-white">
                    <div>
                        <span className='px-2 text-[15px] text-white font-inter-semi'>Eloisa Fernandes</span>
                        <p className='px-2 text-[11px] text-white font-inter-medium'>eloisafer16@gmail.com</p>

                    </div>
                    <button
                        onClick={toggleSidebar}
                        className="focus:outline-none text-2xl"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.70708 5.29289C6.31655 4.90237 5.68339 4.90237 5.29286 5.29289C4.90234 5.68342 4.90234 6.31658 5.29286 6.70711L10.5857 12L5.29277 17.2929C4.90225 17.6834 4.90225 18.3166 5.29277 18.7071C5.6833 19.0976 6.31646 19.0976 6.70698 18.7071L11.9999 13.4142L17.2929 18.7071C17.6834 19.0976 18.3166 19.0976 18.7071 18.7071C19.0976 18.3166 19.0976 17.6834 18.7071 17.2929L13.4141 12L18.707 6.70711C19.0975 6.31658 19.0975 5.68342 18.707 5.29289C18.3165 4.90237 17.6833 4.90237 17.2928 5.29289L11.9999 10.5857L6.70708 5.29289Z" fill="#D1D3D4" />
                        </svg>
                    </button>
                </div>
                <nav className="px-3 py-1">
                    <a href="#" className="flex justify-left  items-center my-1 py-2 px-3 text-gray-700 hover:bg-[#3D2E7C] rounded-[8px]">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.4997 10.9692C16.473 10.7233 18 9.04002 18 7.0001C18 4.96018 16.473 3.27692 14.4997 3.03101C15.4334 4.08875 16 5.47826 16 7.0001C16 8.52194 15.4334 9.91145 14.4997 10.9692Z" fill="#D1D3D4" />
                            <path d="M20 20.0001C20 20.5524 20.4477 21.0001 21 21.0001C21.5523 21.0001 22 20.5524 22 20.0001V18.0001C22 15.34 19.9227 13.1651 17.3018 13.009C18.3539 13.9408 19.1587 15.1454 19.6055 16.5121C19.8565 16.9506 20 17.4586 20 18.0001V20.0001Z" fill="#D1D3D4" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7 15C5.34315 15 4 16.3431 4 18V20C4 20.5523 3.55228 21 3 21C2.44772 21 2 20.5523 2 20V18C2 15.2386 4.23858 13 7 13H13C15.7614 13 18 15.2386 18 18V20C18 20.5523 17.5523 21 17 21C16.4477 21 16 20.5523 16 20V18C16 16.3431 14.6569 15 13 15H7Z" fill="#D1D3D4" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10 5C8.89543 5 8 5.89543 8 7C8 8.10457 8.89543 9 10 9C11.1046 9 12 8.10457 12 7C12 5.89543 11.1046 5 10 5ZM6 7C6 4.79086 7.79086 3 10 3C12.2091 3 14 4.79086 14 7C14 9.20914 12.2091 11 10 11C7.79086 11 6 9.20914 6 7Z" fill="#D1D3D4" />
                        </svg>
                        <span className='px-2 text-[15px] text-white font-inter-semi'>Meus dados</span>
                    </a>

                    <a href="#" className="flex justify-left my-1  items-center py-2 px-3 text-gray-700 hover:bg-[#3D2E7C] rounded-[8px]">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.4997 10.9692C16.473 10.7233 18 9.04002 18 7.0001C18 4.96018 16.473 3.27692 14.4997 3.03101C15.4334 4.08875 16 5.47826 16 7.0001C16 8.52194 15.4334 9.91145 14.4997 10.9692Z" fill="#D1D3D4" />
                            <path d="M20 20.0001C20 20.5524 20.4477 21.0001 21 21.0001C21.5523 21.0001 22 20.5524 22 20.0001V18.0001C22 15.34 19.9227 13.1651 17.3018 13.009C18.3539 13.9408 19.1587 15.1454 19.6055 16.5121C19.8565 16.9506 20 17.4586 20 18.0001V20.0001Z" fill="#D1D3D4" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7 15C5.34315 15 4 16.3431 4 18V20C4 20.5523 3.55228 21 3 21C2.44772 21 2 20.5523 2 20V18C2 15.2386 4.23858 13 7 13H13C15.7614 13 18 15.2386 18 18V20C18 20.5523 17.5523 21 17 21C16.4477 21 16 20.5523 16 20V18C16 16.3431 14.6569 15 13 15H7Z" fill="#D1D3D4" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10 5C8.89543 5 8 5.89543 8 7C8 8.10457 8.89543 9 10 9C11.1046 9 12 8.10457 12 7C12 5.89543 11.1046 5 10 5ZM6 7C6 4.79086 7.79086 3 10 3C12.2091 3 14 4.79086 14 7C14 9.20914 12.2091 11 10 11C7.79086 11 6 9.20914 6 7Z" fill="#D1D3D4" />
                        </svg>
                        <span className='px-2 text-[15px] text-white font-inter-semi'>Meus dados</span>
                    </a>

                    <a href="#" className="flex justify-left my-1  items-center py-2 px-3 text-gray-700 hover:bg-[#3D2E7C] rounded-[8px]">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.4997 10.9692C16.473 10.7233 18 9.04002 18 7.0001C18 4.96018 16.473 3.27692 14.4997 3.03101C15.4334 4.08875 16 5.47826 16 7.0001C16 8.52194 15.4334 9.91145 14.4997 10.9692Z" fill="#D1D3D4" />
                            <path d="M20 20.0001C20 20.5524 20.4477 21.0001 21 21.0001C21.5523 21.0001 22 20.5524 22 20.0001V18.0001C22 15.34 19.9227 13.1651 17.3018 13.009C18.3539 13.9408 19.1587 15.1454 19.6055 16.5121C19.8565 16.9506 20 17.4586 20 18.0001V20.0001Z" fill="#D1D3D4" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7 15C5.34315 15 4 16.3431 4 18V20C4 20.5523 3.55228 21 3 21C2.44772 21 2 20.5523 2 20V18C2 15.2386 4.23858 13 7 13H13C15.7614 13 18 15.2386 18 18V20C18 20.5523 17.5523 21 17 21C16.4477 21 16 20.5523 16 20V18C16 16.3431 14.6569 15 13 15H7Z" fill="#D1D3D4" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10 5C8.89543 5 8 5.89543 8 7C8 8.10457 8.89543 9 10 9C11.1046 9 12 8.10457 12 7C12 5.89543 11.1046 5 10 5ZM6 7C6 4.79086 7.79086 3 10 3C12.2091 3 14 4.79086 14 7C14 9.20914 12.2091 11 10 11C7.79086 11 6 9.20914 6 7Z" fill="#D1D3D4" />
                        </svg>
                        <span className='px-2 text-[15px] text-white font-inter-semi'>Meus dados</span>
                    </a>

                    <a href="#" className="flex justify-left my-1  items-center py-2 px-3 text-gray-700 hover:bg-[#3D2E7C] rounded-[8px]">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.4997 10.9692C16.473 10.7233 18 9.04002 18 7.0001C18 4.96018 16.473 3.27692 14.4997 3.03101C15.4334 4.08875 16 5.47826 16 7.0001C16 8.52194 15.4334 9.91145 14.4997 10.9692Z" fill="#D1D3D4" />
                            <path d="M20 20.0001C20 20.5524 20.4477 21.0001 21 21.0001C21.5523 21.0001 22 20.5524 22 20.0001V18.0001C22 15.34 19.9227 13.1651 17.3018 13.009C18.3539 13.9408 19.1587 15.1454 19.6055 16.5121C19.8565 16.9506 20 17.4586 20 18.0001V20.0001Z" fill="#D1D3D4" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7 15C5.34315 15 4 16.3431 4 18V20C4 20.5523 3.55228 21 3 21C2.44772 21 2 20.5523 2 20V18C2 15.2386 4.23858 13 7 13H13C15.7614 13 18 15.2386 18 18V20C18 20.5523 17.5523 21 17 21C16.4477 21 16 20.5523 16 20V18C16 16.3431 14.6569 15 13 15H7Z" fill="#D1D3D4" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10 5C8.89543 5 8 5.89543 8 7C8 8.10457 8.89543 9 10 9C11.1046 9 12 8.10457 12 7C12 5.89543 11.1046 5 10 5ZM6 7C6 4.79086 7.79086 3 10 3C12.2091 3 14 4.79086 14 7C14 9.20914 12.2091 11 10 11C7.79086 11 6 9.20914 6 7Z" fill="#D1D3D4" />
                        </svg>
                        <span className='px-2 text-[15px] text-white font-inter-semi'>Meus dados</span>
                    </a>
                </nav>
                <div className='w-full px-3 py-1 absolute m-absolute bottom-0 left-1/2 transform -translate-x-1/2'> 
                    <a href="#" className="flex justify-center my-4 w-100 items-center py-2 px-3 bg-[#ffffff]  hover:bg-[#ffffff] rounded-[8px]">
                            <span className='px-2 text-[15px]  text-[#130338] font-inter-regular'>Sair</span>
                        </a>
                </div>
            </div>
            
        </div>
    );
};

export default Sidebar;