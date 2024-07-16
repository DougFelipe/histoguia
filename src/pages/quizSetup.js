import React, { useState } from 'react';
import Sidebar from '../components/Menu.js';
import Control from '../components/QuizSetup/controls.js';
import SelectableRectangles from '../components/QuizSetup/selectableRectangle.js';
import CheckboxOptions from '../components/QuizSetup/checkboxOptions.js';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
const QuizSetup = () => {
    const { id } = useParams();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [questions, setQuestions] = useState([]);
    const navigate = useNavigate();
    const handleToggleSidebar = (isOpen) => {
        setIsSidebarOpen(isOpen);
    };
    const [selectedRectangle, setSelectedRectangle] = useState(null);
    const [controlValue, setControlValue] = useState(null);

    const handleSelectRectangle = (rectangle) => {
        setSelectedRectangle(rectangle);
    };

    const handleControlChange = (value) => {
        setControlValue(value);
    };

    const fetchQuestions = async (themeId, numberOfQuestions) => {
        try {
            const response = await axios.get(`/api/questions/theme/${themeId}/count/${numberOfQuestions}`);
            const questions = response.data;
    
            // Iterar sobre cada questão para buscar suas alternativas
            const updatedQuestions = await Promise.all(questions.map(async (question) => {
                try {
                    console.log("question.id: ",question.id);
                    const questionResponse = await axios.get(`/api/answers/question/${question.id}`);
                    const questionDetails = questionResponse.data;
                    console.log("questionResponse: ",questionResponse);
                    return {
                        ...question,
                        alternatives: questionDetails // supondo que o endpoint /api/question/{questionId} retorne um objeto com um campo alternatives
                    };
                } catch (error) {
                    console.error(`Error fetching question details for question id ${question.id}:`, error);
                    return question; // retorna a questão original se houver algum erro
                }
            }));
    
            console.log("up :", updatedQuestions);
            setQuestions(updatedQuestions);
            navigate('/quiz', { state: { questions: updatedQuestions } });
            // Atualizar o estado ou fazer outra operação com as questões atualizadas
            // setQuestions(updatedQuestions);
        } catch (error) {
            console.error("Error fetching questions:", error);
        }
    };

    const handleSubmit = () => {
        // Aqui você pode fazer o que quiser com os valores obtidos
        console.log('Selected Rectangle:', selectedRectangle);
        console.log('Control Value:', controlValue);
        console.log('Control themeId:', id);
        fetchQuestions(id, controlValue); 

        
    //     axios.get(`/api/questions/byTheme?temaId=${id}&count=${controlValue}`)
    //   .then(response => {
    //     setQuestions(response.data);
    //   })
    //   .catch(error => {
    //     console.error('Erro ao buscar questões:', error);
    //   });

        
    };

    return (
        <div className="flex h-full w-full bg-[#F1F0F3]">
            <Sidebar onToggle={handleToggleSidebar} />
            <div className={`flex-grow transition-all duration-300 ${isSidebarOpen ? 'md:ml-64' : 'ml-0'}`}>
                <div className="w-full h-full flex flex-col justify-start items-center mt-12">
                    <SelectableRectangles onSelect={handleSelectRectangle} />
                    <Control onChange={handleControlChange} />
                    {/* <CheckboxOptions /> */}
                    <a
                        // href='/quiz'
                        type="submit"
                        onClick={handleSubmit}
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
