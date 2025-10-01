const FormNama = ({ value, onChange }) => {
  return (
    <div>
      <label
        htmlFor="nama"
        className="block text-sm sm:text-base font-medium text-gray-500"
      >
        Nama Lengkap <span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        name="nama"
        id="nama"
        className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
        placeholder="Nadin Amizah"
        required
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default FormNama;
