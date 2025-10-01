import { useState, useEffect } from "react";
import {
  updateUser,
  deleteUser,
  getAllUsers,
} from "../services/api/userService";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearUser, updateUserProfil } from "../store/redux/authSlice";

import InputNama from "../components/form/InputNama";
import InputEmail from "../components/form/InputEmail";
import InputNoHp from "../components/form/InputNoHp";
import InputRegion from "../components/form/InputRegion";
import Button from "../components/button/Button";

const Profile = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const [participants, setParticipants] = useState([]);
  const [showParticipants, setShowParticipants] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    nomor: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || "",
        email: user.email || "",
        nomor: user.nomor || "",
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,

      [name === "nama" ? "name" : name === "noHp" ? "nomor" : name]: value,
    }));
  };

  const handleToggleParticipants = async () => {
    if (showParticipants) {
      setShowParticipants(false);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const allUsers = await getAllUsers();
      setParticipants(allUsers);
      setShowParticipants(true);
    } catch (err) {
      setError("Gagal memuat daftar peserta. Coba lagi.");
      console.error("Gagal mengambil semua users:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = async () => {
    if (!user) return;

    setIsLoading(true);
    setError(null);

    try {
      const updatedUser = await updateUser(user.id, formData);

      dispatch(updateUserProfil(updatedUser));

      alert("Perubahan berhasil disimpan!");
    } catch (err) {
      setError("Gagal menyimpan perubahan. Coba lagi.");
      console.error("Update profil gagal:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!user) return;

    const isConfirmed = window.confirm(
      "Apakah anda yakin ingin menghapus secara permanen akun Anda?"
    );

    if (isConfirmed) {
      setIsLoading(true);
      setError(null);
    }

    try {
      await deleteUser(user.id);

      alert("Akun Anda telah berhasil dihapus");
      dispatch(clearUser());

      navigate("/login");
    } catch (err) {
      setError("Gagal menghapus Akun. Coba lagi.");
      console.error("Hapus akun gagal:", err);
      setIsLoading(false);
    }
  };

  const displayName = user ? user.name : "Pengguna";
  const displayEmail = user ? user.email : "Tidak ada email";

  return (
    <div className="py-8 px-4 mt-[64px] lg:px-[120px]">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-64 space-y-2">
            <h4 className="font-semibold text-gray-900">Ubah Profil</h4>
            <p className="text-gray-600 text-sm">Ubah data diri Anda</p>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
              <div className="space-y-3">
                <button className="w-full flex items-center gap-3 px-4 py-3 text-left border border-yellow-300 bg-yellow-50 text-yellow-700 rounded-md hover:bg-yellow-100 transition">
                  <img src="Person.png" alt="Profil Saya" className="w-5 h-5" />
                  <span className="font-medium">Profil Saya</span>
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-3 text-left border border-gray-200 text-gray-700 hover:bg-gray-50 rounded-md transition">
                  <img src="Book.png" alt="Kelas Saya" className="w-5 h-5" />
                  <span className="font-medium">Kelas Saya</span>
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-3 text-left border border-gray-200 text-gray-700 hover:bg-gray-50 rounded-md transition">
                  <img
                    src="ShoppingBasket.png"
                    alt="Pesanan Saya"
                    className="w-5 h-5"
                  />
                  <span className="font-medium">Pesanan Saya</span>
                </button>
                <button
                  onClick={handleToggleParticipants}
                  className="w-full flex items-center gap-3 px-4 py-3 text-left border border-gray-200 bg-[#3ECF4C] text-white hover:bg-yellow-400 rounded-md transition"
                  disabled={isLoading}
                >
                  <img
                    src="Person.png"
                    alt="Daftar Peserta"
                    className="w-5 h-5"
                  />
                  <span className="font-medium">
                    {showParticipants ? "Tutup Daftar" : "Daftar Peserta"}
                  </span>
                </button>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              {/* User Info */}
              <div className="flex items-center gap-4 mb-6">
                <div>
                  <img
                    src={user?.avatar || "Avatar.png"}
                    alt={displayName}
                    className="w-[92px] h-[92px] rounded-sm object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-[20px] font-semibold text-gray-900">
                    {displayName}
                  </h3>
                  <p className="text-sm text-gray-600">{displayEmail}</p>
                  <button className="text-red-500 text-sm font-semibold hover:underline">
                    Ganti Foto Profil
                  </button>
                </div>
              </div>

              {error && (
                <p className="text-red-500 text-center mb-4">{error}</p>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <InputNama
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <InputEmail
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <div className="flex items-end gap-2 lg:col-span-2">
                  <InputRegion
                    name="region"
                    value={formData.region || ""}
                    onChange={handleChange}
                  />
                  <InputNoHp
                    name="nomor"
                    value={formData.nomor}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="flex justify-end">
                <Button
                  variant="primary"
                  fullWidth={false}
                  className="px-6"
                  onClick={handleSave}
                  disabled={isLoading}
                >
                  {isLoading ? "Menyimpan..." : "Simpan"}
                </Button>
              </div>
            </div>
          </div>

          {showParticipants && (
            <div className="mt-8">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-[20px] font-semibold text-gray-800 mb-4">
                  Daftar Seluruuh Peserta
                </h3>
                {isLoading ? (
                  <p>Memuat..</p>
                ) : (
                  <ul className="list-disc pl-5 space-x-2">
                    {participants.map((participant) => (
                      <li key={participant.id} className="text-gray-600">
                        {participant.name}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          )}
        </div>
        <div className="flex pt-6 justify-end lg:pt-7">
          <Button
            variant="danger"
            fullWidth={false}
            className="px-6"
            onClick={handleDelete}
            disabled={isLoading}
          >
            Hapus Akun
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
