import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Menu.js';
import Avatar from "../assets/img/Avatar.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

const UserProfile = () => {
    const navigate = useNavigate();
    const [isEditing, setIsEditing] = useState(false);
    const [userData, setUserData] = useState({
        firstName: 'Eloisa',
        lastName: 'Fernandes',
        email: 'eloisafer16@gmail.com',
        phone: '123-456-7890',
        birthdate: '1990-01-01',
        course: 'Computer Science',
        registration: '2021001',
        university: 'Universidade de São Paulo',
        profileImage: Avatar
    });
    const [formData, setFormData] = useState({ ...userData });
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showErrorMessage, setShowErrorMessage] = useState(false);

    const formatDate = (date) => {
        const [year, month, day] = date.split('-');
        return `${day}/${month}/${year}`;
    };

    const parseDate = (date) => {
        const [day, month, year] = date.split('/');
        return `${year}-${month}-${day}`;
    };

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setFormData({ ...formData, profileImage: reader.result });
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'course', 'university'];
        const hasEmptyField = requiredFields.some(field => !formData[field]);

        if (hasEmptyField) {
            setShowErrorMessage(true);
            setShowSuccessMessage(false);
            setTimeout(() => setShowErrorMessage(false), 15000);
            return;
        }

        const updatedData = { ...formData, birthdate: parseDate(formData.birthdate) };
        setUserData(updatedData);
        setIsEditing(false);
        setShowSuccessMessage(true);
        setShowErrorMessage(false);
        setTimeout(() => setShowSuccessMessage(false), 7000);
    };

    const handleCancelClick = () => {
        setFormData({ ...userData, birthdate: formatDate(userData.birthdate) });
        setIsEditing(false);
        navigate('/home');
    };

    const handleToggleSidebar = (isOpen) => {
        setIsSidebarOpen(isOpen);
    };

    return (
        <div className="flex h-full w-full bg-[#F1F0F3]">
            <Sidebar onToggle={handleToggleSidebar} />

            <div className={`flex-grow flex flex-col justify-center items-center transition-all duration-300 ${isSidebarOpen ? 'md:ml-64' : 'ml-0'}`}>
                {showSuccessMessage && (
                    <div className="absolute top-0 mt-4 w-full max-w-lg mx-auto p-4 font-inter-semi bg-green-500 text-white text-center rounded">
                        Dados salvos com sucesso!
                    </div>
                )}
                {showErrorMessage && (
                    <div className="absolute top-0 mt-4 w-full max-w-lg mx-auto p-4 font-inter-semi bg-red-500 text-white text-center rounded">
                        Por favor, preencha todos os campos obrigatórios!
                    </div>
                )}
                
                <div className="flex flex-col items-center  text-primary p-8 rounded-lg w-11/12 md:w-11/12 lg:w-11/12 mx-auto mt-12">

                    <div className="w-full">
                        <span className="font-inter-semi text-[24px] text-[#130338]">Meus Dados</span>
                    </div>
                    <form onSubmit={handleFormSubmit} className="w-full rounded-[20px] bg-white font-inter-medium mt-10 p-8">
                        <div className="relative mb-4">
                            <img
                                src={formData.profileImage || 'default-profile.png'}
                                alt="Profile"
                                className="w-24 h-24 rounded-full object-cover cursor-pointer"
                            />
                            <label
                                htmlFor="profileImage"
                                className="absolute bottom-0 left-0 p-1 bg-white rounded-full cursor-pointer hover:bg-gray-100"
                            >
                                <FontAwesomeIcon icon={faEdit} className="text-gray-600" />
                                <input
                                    type="file"
                                    id="profileImage"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                    className="hidden"
                                />
                            </label>
                        </div>
                        <div className="flex mb-4">
                            <div className="w-1/2 pr-2">
                                <label className="block mb-2">Nome</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                    className="w-full p-2 rounded border-solid border-2 font-inter-regular  text-primary focus:border-[#130338]"
                                />
                            </div>
                            <div className="w-1/2 pl-2">
                                <label className="block mb-2">Sobrenome</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleInputChange}
                                    className="w-full p-2 rounded border-solid border-2 font-inter-regular  text-primary focus:border-[#130338]"
                                />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full p-2 rounded border-solid border-2 font-inter-regular  text-primary focus:border-[#130338]"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2">Telefone</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                className="w-full p-2 rounded border-solid border-2 font-inter-regular  text-primary focus:border-[#130338]"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 text-primary">Data de Nascimento</label>
                            <input
                                type="text"
                                name="birthdate"
                                value={formatDate(formData.birthdate)}
                                readOnly
                                className="w-full p-2 rounded border-solid border-2 font-inter-regular  bg-gray-300 text-primary"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2">Curso</label>
                            <input
                                type="text"
                                name="course"
                                value={formData.course}
                                onChange={handleInputChange}
                                className="w-full p-2 rounded border-solid border-2 font-inter-regular  text-primary focus:border-[#130338]"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2">Universidade</label>
                            <input
                                type="text"
                                name="university"
                                value={formData.university}
                                onChange={handleInputChange}
                                className="w-full p-2 rounded border-solid border-2 font-inter-regular  text-primary focus:border-[#130338]"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2">Matrícula</label>
                            <input
                                type="text"
                                name="registration"
                                value={formData.registration}
                                readOnly
                                className="w-full p-2 rounded border-solid border-2 font-inter-regular  bg-gray-300 text-primary"
                            />
                        </div>

                        <div className="flex justify-center md:justify-start mt-6">
                            <button
                                type="button"
                                onClick={handleCancelClick}
                                className="px-4 py-2 bg-white border-solid border-2 border-primary rounded hover:bg-gray-200"
                            >
                                Cancelar
                            </button>
                            <button
                                type="submit"
                                className="ml-3 px-4 py-2 bg-primary  text-white rounded hover:bg-[#3D2E7C]"
                            >
                                Salvar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
