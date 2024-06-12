import React, { useState, useEffect } from "react";

const Status = (props) => {
  const [status, setStatus] = useState("");

  const handleStatus = () => {
    if (props.status === "Active") {
      setStatus("text-[#409261] bg-[#E9FFEF]");
    } else if (props.status === "Offline") {
      setStatus("text-[#3F3748] bg-[#E4E4E4]");
    } else if (props.status === "Wait") {
      setStatus("text-[#D98634] bg-[#FFF2DD]");
    }
  };

  useEffect(() => {
    handleStatus();
  }, []);

  return (
    <div>
      <span
        className={`w-[100px] h-[23px] ${status} rounded-lg flex flex-row gap-[10px] items-center justify-center`}
      >
        <i className="fa-solid fa-circle fa-xs"></i>
        {props.status}
      </span>
    </div>
  );
};

export default Status;
