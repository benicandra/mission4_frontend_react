const InputEmail = ({ value, onChange, name }) => {
  return (
    <div className="relative w-full">
      <label
        htmlFor="email"
        className="absolute left-3 top-[-9px] block text-sm font-medium text-[#3ECF4C] bg-white px-2"
      >
        E-Mail
      </label>
      <input
        type="email"
        id="email"
        name={name}
        value={value}
        onChange={onChange}
        defaultValue="rubyjane@gmail.com"
        className="w-full text-base font-normal px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
      />
    </div>
  );
};

export default InputEmail;
