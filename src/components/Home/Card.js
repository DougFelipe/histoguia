import React from 'react';
import ProgressCircle from './ProgressCircle.js';

const Card = () => {
    return (
        <div className="bg-[#130338] p-10 w-[330px] md:w-1/2 h-auto md:h-[410px] mr-2 rounded-[25px]">
            <div>
                <span className='font-inter-semi text-[20px]'>Resumo da sua semana</span>
            </div>
            <div className='flex justify-center items-center '>
                <div className='w-1/2 flex flex-col items-center justify-center mt-6'>
                    <div className='w-6/12 text-center bg-[#3D2E7C] rounded-xl mt-6 p-2'>
                        <span>Total de questões respondidas</span> <br />
                        <span className='text-[24px]'>36</span>
                    </div>
                    <div className='w-6/12 text-center bg-[#3D2E7C] rounded-xl mt-6 p-2'>
                        <span>Total de subtemas abortados</span> <br />
                        <span className='text-[24px]'>6</span>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center relative text-white w-1/2">
                    <div className=" absolute w-full mx-auto left-[35px] top-[30px] text-center text-[16px] text-white font-semibold">
                        Questões Corretas
                    </div>
                    <ProgressCircle progress={90} />
                </div>

            </div>


        </div>
    );
};


export default Card;