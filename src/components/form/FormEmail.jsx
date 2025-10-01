const FormEmail = ({ value, onChange }) => {
  return (
    <div>
      <label
        htmlFor="email"
        className="block text-sm sm:text-base font-medium text-gray-500"
      >
        E-Mail <span className="text-red-500">*</span>
      </label>
      <input
        type="email"
        name="email"
        id="email"
        className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
        placeholder="babymonster@yg.co.id"
        required
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default FormEmail;
