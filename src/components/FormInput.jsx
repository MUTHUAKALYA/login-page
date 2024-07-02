import PropTypes from "prop-types";

const FormInput = ({ type, name, label, placeholder, register, error }) => {
  return (
    <>
      <div className="space-y-1 ">
        <label htmlFor={name} className="text-lg font-bold">
          {label}
        </label>
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          className={`px-2 pb-2 rounded  bg-transparent text-gray-100  placeholder-gray-200 block w-full outline-none ${
            error
              ? "border-b border-red-600 placeholder-gray-400"
              : "border-b border-gray-300"
          }`}
          {...register}
        />
        {/* <hr className="border border-red-950" /> */}
      </div>
    </>
  );
};

FormInput.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  handleOnChange: PropTypes.func,
};

export default FormInput;
