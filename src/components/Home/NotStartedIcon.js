import React from 'react';
import NotStarted from '../../assets/icons/not-started.svg';

const NotStartedIcon = () => {
    return (
        <div className="flex justify-center items-center   rounded-lg">
            <img src={NotStarted} alt="Bloqueado" />
        </div>
    );
};

export default NotStartedIcon;