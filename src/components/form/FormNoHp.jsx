const FormNoHp = ({ value, onChange }) => {
  return (
    <div className="w-full">
      <label for="region" className="block text-sm font-medium text-gray-700">
        No. Hp <span className="text-red-500">*</span>
      </label>
      <div className="flex gap-2">
        <select
          name="region"
          id="reg-select"
          className="w-24 sm:w-28 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
        >
          <option value="+62" data-flag="🇮🇩">
            🇮🇩 +62
          </option>
          <option value="+1" data-flag="🇺🇸">
            🇺🇸 +1
          </option>
        </select>
        <input
          type="tel"
          name="noHp"
          className="flex-1 min-w-0 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          placeholder="897774547878"
          required
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default FormNoHp;
