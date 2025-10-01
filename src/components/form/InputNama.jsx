const InputNama = ({ value, onChange, name }) => {
  return (
    <div className="relative w-full">
      <label
        htmlFor="nama"
        className="absolute left-3 top-[-9px] block text-sm font-medium text-[#3ECF4C] bg-white px-2"
      >
        Nama Lengkap
      </label>
      <input
        type="text"
        id="nama"
        name={name}
        value={value}
        onChange={onChange}
        className="w-full text-base font-normal px-5 py-3 border border-green-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
      />
    </div>
  );
};

export default InputNama;
