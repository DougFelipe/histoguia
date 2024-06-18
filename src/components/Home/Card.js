import React from 'react';
import  ProgressCircle  from './ProgressCircle.js';

const Card = () => {
    return (
        <div className="bg-[#130338] p-10 w-[330px] md:w-1/2 h-auto md:h-[410px] mr-2 rounded-[25px]">
            <div className="flex justify-center text-white">
                <ProgressCircle progress={90} />
            </div>
            
        </div>
    );
};


export default Card;