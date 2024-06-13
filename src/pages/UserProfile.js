import React, { useState } from 'react';
import Sidebar from '../components/Menu.js';

const UserProfile = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [userData, setUserData] = useState({
        name: 'Eloisa Fernandes',
        email: 'eloisafer16@gmail.com',
        phone: '123-456-7890',
        birthdate: '1990-01-01',
        course: 'Computer Science',
        registration: '2021001'
    });
    const [formData, setFormData] = useState({ ...userData });

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setUserData(formData);
        setIsEditing(false);
    };

    const handleCancelClick = () => {
        setFormData({ ...userData });
        setIsEditing(false);
    };
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleToggleSidebar = (isOpen) => {
        setIsSidebarOpen(isOpen);
    };

    return (
        <div className="flex h-full w-full bg-[#F1F0F3]">
            <Sidebar onToggle={handleToggleSidebar} />

            <div className={`flex-grow flex flex-col justify-center items-center transition-all duration-300 ${isSidebarOpen ? 'md:ml-64' : 'ml-0'}`}>
                <div className="flex flex-col items-center text-primary p-8 rounded-lg w-11/12 md:w-1/2 lg:w-1/3 mx-auto mt-12">
                    {isEditing ? (
                        <form onSubmit={handleFormSubmit} className="w-full font-inter-medium">
                            <div className="mb-4">
                                <label className="block mb-2">Nome</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="w-full p-2 rounded border-solid border-2 bg-[#F1F0F3] text-primary focus:border-[#130338]"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full p-2 rounded border-solid border-2 bg-[#F1F0F3] text-primary focus:border-[#130338]"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2">Telefone</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className="w-full p-2 rounded border-solid border-2 bg-[#F1F0F3] text-primary focus:border-[#130338]"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2">Data de Nascimento</label>
                                <input
                                    type="date"
                                    name="birthdate"
                                    value={formData.birthdate}
                                    readOnly
                                    className="w-full p-2 rounded border-solid border-2 bg-gray-300 text-primary"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2">Curso</label>
                                <input
                                    type="text"
                                    name="course"
                                    value={formData.course}
                                    onChange={handleInputChange}
                                    className="w-full p-2 rounded border-solid border-2 bg-[#F1F0F3] text-primary focus:border-[#130338]"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2">Matrícula</label>
                                <input
                                    type="text"
                                    name="registration"
                                    value={formData.registration}
                                    readOnly
                                    className="w-full p-2 rounded border-solid border-2 bg-gray-300 text-primary"
                                />
                            </div>
                            <div className="flex justify-between">
                                <button
                                    type="button"
                                    onClick={handleCancelClick}
                                    className="px-4 py-2 bg-gray-500 rounded hover:bg-gray-700"
                                >
                                    Cancelar 
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-primary text-white rounded hover:bg-[#3D2E7C]"
                                >
                                    Salvar
                                </button>
                            </div>
                        </form>
                    ) : (
                        <div className="w-full">
                            <h2 className="text-2xl mb-4">Perfil do Usuário</h2>
                            <p className="mb-2"><strong>Nome:</strong> {userData.name}</p>
                            <p className="mb-2"><strong>Email:</strong> {userData.email}</p>
                            <p className="mb-2"><strong>Telefone:</strong> {userData.phone}</p>
                            <p className="mb-2"><strong>Data de Nascimento:</strong> {userData.birthdate}</p>
                            <p className="mb-2"><strong>Curso:</strong> {userData.course}</p>
                            <p className="mb-4"><strong>Matrícula:</strong> {userData.registration}</p>
                            <button
                                onClick={handleEditClick}
                                className="px-4 py-2 bg-primary text-white rounded hover:bg-[#3D2E7C]"
                            >
                                Editar
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default UserProfile;