import React from "react";
import PropTypes from "prop-types";
import { IoIosCash } from "react-icons/io";
import { TbCategoryFilled } from "react-icons/tb";

const CustomerCard = ({ category, code, name, currency, territory }) => {
  return (
    <div className="bg-blue-200 w-[320px] shadow-xl p-5  rounded-md">
      <div className="flex flex-col items-center justify-center">
        {/* customer pfp */}
        <img
          className="w-36 border-2 border-blue-950 rounded-full relative"
          src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg"
        />
        <div className="flex flex-col justify-center items-center mt-4">
          <span className=" text-sm font-black">{code}</span>
          <span className="text-sm font-normal">{territory}</span>
        </div>

        <div className="flex gap-x-2 mt-2">
          <span className="px-1 py-1 border border-blue-300   text-sm flex w-[72px] gap-x-2 items-center bg-blue-100 rounded-lg">
            <IoIosCash className="text-green-600 text-xl" />
            {currency}
          </span>
          <span className="px-1 py-1 border border-blue-300   text-sm flex w-[94px] gap-x-2 items-center bg-blue-100 rounded-lg">
            <TbCategoryFilled className="text-blue-800 text-xl" />
            {category}
          </span>
        </div>
      </div>

      <span className=" text-xs bg-blue-900 text-gray-50 px-2 py-1 rounded-lg absolute top-[190px] left-40">
        {name}
      </span>
    </div>
  );
};

export default CustomerCard;