const FormPassword = ({
  value,
  onChange,
  label = "Kata Sandi",
  name,
  className = "",
}) => {
  return (
    <div className={className}>
      <label
        htmlFor="password"
        className="block text-sm sm:text-base font-medium text-gray-500"
      >
        {" "}
        {label} <span className="text-red-500">*</span>
      </label>
      <div className="relative">
        <input
          type="password"
          name={name}
          id={name}
          className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          placeholder="••••••••"
          required
          value={value}
          onChange={onChange}
        />

        <button
          type="button"
          className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 focus:outline-none focus:text-gray-600"
        >
          <img src="eyeoff.png" alt="" />
        </button>
      </div>
    </div>
  );
};

export default FormPassword;
