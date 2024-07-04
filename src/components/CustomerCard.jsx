import React from "react";

const CustomerCard = () => {
  return (
    <div className="bg-white w-[400px] h-[300px] shadow-xl m-5 p-5">
      <div className="flex gap-x-5 p-5 items-center">
        <img
          className="w-20 border rounded-full"
          src="https://i.pinimg.com/474x/81/8a/1b/818a1b89a57c2ee0fb7619b95e11aebd.jpg"
          alt="user-profile-picture"
        />
        <div className="flex flex-col">
          <span className="font-bold text-md">CAMPMATE</span>
          <span className=" text-xs">WI/2024/876</span>
        </div>
      </div>
      <span className="px-3 py-1 border rounded-sm">
        <strong>Type :</strong> Individual
      </span>
    </div>
  );
};

export default CustomerCard;
