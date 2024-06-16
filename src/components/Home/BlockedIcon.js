import React from 'react';
import Blocked from '../../assets/icons/blocked.svg';

const BlockedIcon = () => {
    return (
        <div className="flex justify-center items-center   rounded-lg">
            <img src={Blocked} alt="Bloqueado" />
        </div>
    );
};

export default BlockedIcon;