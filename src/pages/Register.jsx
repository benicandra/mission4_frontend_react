import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { createUser } from "../services/api/userService";

import FormEmail from "../components/form/FormEmail";
import FormNama from "../components/form/FormNama";
import FormNoHp from "../components/form/FormNoHp";
import FormPassword from "../components/form/FormPassword";
import Button from "../components/button/Button";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    noHp: "",
    password: "",
    konfirmasiPassword: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.konfirmasiPassword) {
      setError("Password dan konfirmasi tidak cocok!");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      await createUser({
        name: formData.nama,
        email: formData.email,
        nomor: formData.noHp,
        password: formData.password,
      });

      alert("Pendaftaran berhasil! Silakan masuk dengan akun Anda.");
      navigate("/login");
    } catch (err) {
      setError("Pendaftaran gagal. Email mungkin sudah terdaftar");
      console.error("Gagal mendaftar:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen mt-20 p-9">
      <div className=" bg-white rounded-lg shadow-md p-9 w-full max-w-md mx-auto sm:max-w-xl">
        <div className="text-center mb-8">
          <h3 className="font-poppins text-[24px] md:text-[32px] font-bold text-gray-800">
            Pendaftaran Akun
          </h3>
          <p className="font-dm-sans text-sm sm:text-base text-gray-500 mt-2">
            Yuk, daftarkan akunmu sekarang juga!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <FormNama value={formData.nama} onChange={handleChange} />
          <FormEmail value={formData.email} onChange={handleChange} />
          <FormNoHp value={formData.noHp} onChange={handleChange} />
          <FormPassword
            label="Kata Sandi"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <FormPassword
            label="Konfirmasi Kata Sandi"
            name="konfirmasiPassword"
            value={formData.konfirmasiPassword}
            onChange={handleChange}
          />

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <div className="text-right">
            <a
              href="#"
              className="font-dm-sans text-sm sm:text-base text-gray-500 hover:underline focus:outline-none"
            >
              Lupa Password?
            </a>
          </div>

          <Button variant="primary" type="submit" disabled={isLoading}>
            {isLoading ? "Mendaftar..." : "Daftar"}
          </Button>

          <Link to="/Login" className="w-ful block mt-6">
            <Button variant="thirdth" type="submit" value="masuk">
              Masuk
            </Button>
          </Link>

          <div className="flex items-center my-6">
            <hr className="flex-1 border-t border-gray-300" />
            <span className="px-4 text-gray-500 text-base">atau</span>
            <hr className="flex-1 border-t border-gray-300" />
          </div>

          <Button variant="google">
            <img src="/googlelogo.png" alt="logo Google" />
            Daftar dengan Google
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Register;
