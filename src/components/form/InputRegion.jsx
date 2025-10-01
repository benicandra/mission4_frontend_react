const InputRegion = ({ value, onChange, name }) => {
  return (
    <div className="">
      <label
        htmlFor="region"
        className="block text-xs font-medium text-gray-700"
      >
        {" "}
      </label>
      <div className="relative">
        <select
          id="region"
          name={name}
          value={value}
          onChange={onChange}
          className="px-3 py-3.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
        >
          <option value="+62">+62</option>
          <option value="+1">+1</option>
        </select>
      </div>
    </div>
  );
};

export default InputRegion;
