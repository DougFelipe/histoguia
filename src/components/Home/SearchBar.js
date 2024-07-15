import React, { useState, useEffect } from 'react';
import EpitelioSimples from '../../assets/img/temas/epitelio-simples.jpg';
import EpitelioEstratificado from '../../assets/img/temas/epitelio-estratificado.jpg';
import TecidoConjuntivoDito from '../../assets/img/temas/tecido-conjuntivo-dito.jpeg';
import TecidoConjuntivoDenso from '../../assets/img/temas/tecido-conjuntivo-denso.webp';
import TecidoMuscularEstriado from '../../assets/img/temas/musculo-estriado-esqueletico.jpg';
import TecidoMuscularLiso from '../../assets/img/temas/tecido-muscular-liso.webp';
import TecidoNervoso from '../../assets/img/temas/tecido-nervoso.webp';
import CartilagemHialina from '../../assets/img/temas/cartilagem-hialina.jpeg';
import CompleteIcon from './CompleteIcon';
import PartialSVGImage from './PartialSVGImage';
import BlockedIcon from './BlockedIcon';
import NotStartedIcon from './NotStartedIcon';
import { Navigate, useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [themes, setThemes] = useState('');
  const [results, setResults] = useState([]);
  const navigate = useNavigate();
 
  const temas = [
    { nome: 'Epitélio Simples', img: EpitelioSimples, status: 'Não iniciado', link: '/quizSetup' },
    { nome: 'Epitélio Estratificado', img: EpitelioEstratificado, status: 'Bloqueado', link: '/quizSetup' },
    { nome: 'Tecido Conjuntivo Propriamente Dito', img: TecidoConjuntivoDito, status: 50, link: '/quizSetup' },
    { nome: 'Tecido Conjuntivo Denso', img: TecidoConjuntivoDenso, status: 75, link: '/quizSetup' },
    { nome: 'Tecido Muscular Estriado Esquelético', img: TecidoMuscularEstriado, status: 'Completo', link: '/quizSetup' },
    { nome: 'Tecido Muscular Liso', img: TecidoMuscularLiso, status: 'Bloqueado', link: '/quizSetup' },
    { nome: 'Tecido Nervoso', img: TecidoNervoso, status: 30, link: '/quizSetup' },
    { nome: 'Cartilagem Hialina', img: CartilagemHialina, status: 90, link: '/quizSetup' }
  ];

  useEffect(() => {
    fetch('/api/theme')
      .then(response => response.json())
      .then(data => setThemes(data));
  }, []);

  useEffect(() => {
    setResults(themes);
  }, []);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setQuery(value);

    if (value) {
      const filteredItems = themes.filter((theme) =>
      theme.name.toLowerCase().includes(value.toLowerCase())
      );
      setResults(filteredItems);
    } else {
      setResults(themes);
    }
  };

  const renderStatusComponent = (status) => {
    if (status === 'Completo') {
      return <CompleteIcon />;
    } else if (status === 'Bloqueado') {
      return <BlockedIcon />;
    } else if (status === 'Não iniciado') {
      return <NotStartedIcon />;
    } else if (typeof status === 'number') {
      return <PartialSVGImage percentage={status} />;
    }
    return null;
  };

  const handleSetup = (id) => {
    navigate(`/quizSetup/${id}`);
  };

  return (
    <div className="flex flex-col items-center justify-center  w-full md:w-11/12 p-4 mt-8 md:mt-2">
      <div className="w-full">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg
              width="18"
              height="24"
              viewBox="0 0 18 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-gray-500"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.3333 9.64711C14.3333 6.51751 11.7962 3.98047 8.66664 3.98047C5.53704 3.98047 3 6.51751 3 9.64711C3 12.7767 5.53704 15.3138 8.66664 15.3138C11.7962 15.3138 14.3333 12.7767 14.3333 9.64711ZM17.3333 9.64711C17.3333 4.86066 13.4531 0.980469 8.66664 0.980469C3.88019 0.980469 0 4.86066 0 9.64711C0 14.4336 3.88019 18.3138 8.66664 18.3138C9.69555 18.3138 10.6826 18.1345 11.5982 17.8054C11.6416 18.0873 11.7462 18.3643 11.9161 18.6166L14.2852 22.1361C14.902 23.0524 16.1448 23.2953 17.0611 22.6785C17.9774 22.0617 18.2202 20.8188 17.6034 19.9025L15.2343 16.383C15.0908 16.1697 14.9134 15.993 14.7141 15.8551C16.3299 14.2808 17.3333 12.0812 17.3333 9.64711Z"
                fill="#767676"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Qual tema você deseja procurar?"
            value={query}
            onChange={handleInputChange}
            className="w-full p-4 pl-10 border rounded-[50px] focus:outline-none focus:ring-2 focus:ring-gray-300 text-[14px] font-inter-regular"
          />
        </div>
        {results.length > 0 && (
          <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {results.map((result, index) => (
              <div key={index} className="p-4 bg-white rounded-[23px] shadow-lg">
                <a onClick={() => handleSetup(result.id)} className='w-full pointer flex flex-col justify-between'>
                  <div className='w-full'>
                    <img className='object-cover w-full h-[140px] md:h-[180px] mb-2 rounded-[12px]' src={result.img} alt={result.name} />
                    <span className='w-full block text-left mt-2 text-[16px] font-primary font-inter-semi h-[60px]' >{result.name}</span>
                  </div>
                  <div className='w-full flex justify-between items-center mt-10'>
                    <span className='block text-left  text-[14px] font-[#9098A3] font-inter-regular' >
                      {typeof result.status === 'number' ? `${result.status}% completo` : result.status}
                    </span>
                    <div>{renderStatusComponent(result.status)}</div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;