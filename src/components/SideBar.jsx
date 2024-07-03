import { FaUser } from "react-icons/fa";

const SideBar = () => {
  return (
    <div className="bg-blue-900 w-[300px] h-screen p-8 flex justify-center items-center gap-x-2 text-white">
      <FaUser />
      <p className=" text-center font-bold text-lg">Customer Details</p>
    </div>
  );
};

export default SideBar;
