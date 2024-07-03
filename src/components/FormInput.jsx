import PropTypes from "prop-types";

const FormInput = ({ type, name, placeholder, register }) => {
  return (
    <>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete="off"
        className={`px-2 pb-0 rounded  bg-transparent text-gray-100  placeholder-gray-300 block w-full outline-none relative`}
        {...register}
      />
    </>
  );
};

FormInput.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  handleOnChange: PropTypes.func,
};

export default FormInput;
