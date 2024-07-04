import React from "react";
import PropTypes from "prop-types";
import { IoIosCash } from "react-icons/io";
import { TbCategoryFilled } from "react-icons/tb";

const CustomerCard = ({ category, code, name, currency, territory }) => {
  return (
    <div className="bg-blue-200 w-[240px] sm:w-[260px] md:w-[360px]   shadow-xl hover:shadow-black p-5  rounded-md h-[300px] md:h-[360px]">
      <div className="flex flex-col items-center justify-center">
        {/* customer pfp */}
        <img
          className="w-36 md:w-44 border-2 border-blue-950 rounded-full relative"
          src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg"
        />
        <div className="flex flex-col justify-center items-center mt-4">
          <span
            className=" text-sm md:text-lg font-black "
            title="customer-code"
          >
            {code}
          </span>
          <span className="text-sm md:text-lg font-normal">{territory}</span>
        </div>

        <div className="flex gap-x-2 mt-2">
          <span
            className="px-1 py-1 border border-blue-300   text-sm md:text-lg flex w-[72px] md:w-[90px] gap-x-2 items-center bg-blue-100 rounded-lg hover:cursor-pointer"
            title="Currency - QAR"
          >
            <IoIosCash className="text-green-600 text-xl" />
            {currency}
          </span>
          <span
            className="px-1 py-1 border border-blue-300   text-sm md:text-md flex w-[94px]sm:w-[104px] gap-x-2 items-center bg-blue-100 rounded-lg hover:cursor-pointer"
            title="Category - individual"
          >
            <TbCategoryFilled className="text-blue-800 text-xl" />
            {category}
          </span>
        </div>
      </div>

      <span className=" text-xs md:text-sm bg-blue-900 text-gray-50 px-2 py-1 rounded-lg absolute top-[164px] sm:top-[190px] md:top-[214px] left-[100px] sm:left-[132px] md:left-[176px]">
        {name}
      </span>
    </div>
  );
};

export default CustomerCard;
