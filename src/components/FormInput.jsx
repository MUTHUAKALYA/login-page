import PropTypes from "prop-types";

const FormInput = ({ type, name, label, placeholder, register, error }) => {
  return (
    <>
      <div className="space-y-2">
        <label htmlFor={name} className="text-lg font-bold">
          {label}
        </label>
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          className={`px-4 py-2 rounded bg-gray-50 block w-full outline-none ${
            error ? "border border-red-500" : "border-none"
          }`}
          {...register}
        />
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
