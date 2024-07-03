import PropTypes from "prop-types";

const FormButton = ({ label }) => {
  return (
    <div className=" flex items-center justify-center ">
      <button className="px-2 py-2  rounded-lg bg-blue-400 text-gray-800 hover:bg-blue-900 hover:text-gray-300  font-bold text-md w-full">
        {label}
      </button>
    </div>
  );
};

FormButton.propTypes = {
  label: PropTypes.string,
};

export default FormButton;
