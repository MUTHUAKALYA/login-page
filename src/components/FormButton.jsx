import PropTypes from "prop-types";

const FormButton = ({ label }) => {
  return (
    <div>
      <button className="px-4 py-2 rounded-lg bg-blue-950 text-white hover:bg-blue-800 w-full font-bold text-md">
        {label}
      </button>
    </div>
  );
};

FormButton.propTypes = {
  label: PropTypes.string,
};

export default FormButton;
