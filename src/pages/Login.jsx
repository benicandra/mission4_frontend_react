import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as userService from "../services/api/userService";

import { useDispatch } from "react-redux";
import { setUser } from "../store/redux/authSlice";

import FormEmail from "../components/form/FormEmail";
import FormPassword from "../components/form/FormPassword";
import Button from "../components/button/Button";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoadingLocal] = useState(false);

  const handleDaftar = () => {
    navigate("/register");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoadingLocal(true);

    try {
      const user = await userService.login(email, password);
      if (user) {
        dispatch(setUser(user));
        navigate("/profile", { replace: true });
      } else {
        setError("Email atau password salah");
      }
    } catch (err) {
      setError("Terjadi kesalahan saat login. Coba lagi.");
      console.error(err);
    } finally {
      setLoadingLocal(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4 sm:p-9">
      <div className="bg-white rounded-lg shadow-md p-6 sm:p-9 w-full max-w-md mx-auto">
        <div className="text-center mb-8">
          <h3 className="font-poppins text-2xl md:text-3xl font-bold text-gray-800">
            Masuk ke Akun
          </h3>
          <p className="font-dm-sans text-sm sm:text-base text-gray-500 mt-2">
            Yuk, lanjutin belajarmu di videobelajar.
          </p>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 text-sm rounded-md">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <FormEmail
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <FormPassword
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="text-right">
            <a
              href="#"
              className="font-dm-sans text-sm sm:text-base text-gray-500 hover:underline focus:outline-none"
            >
              Lupa Password?
            </a>
          </div>

          <Button variant="primary" type="submit" disabled={loading}>
            {loading ? "Sedang Masuk..." : "Masuk"}
          </Button>

          <Button variant="thirdth" type="button" onClick={handleDaftar}>
            Daftar
          </Button>

          <div className="flex items-center my-6">
            <hr className="flex-1 border-t border-gray-300" />
            <span className="px-4 text-gray-500 text-base">atau</span>
            <hr className="flex-1 border-t border-gray-300" />
          </div>

          <Button variant="google">
            <img src="/googlelogo.png" alt="" className="w-5 h-5 mr-2 inline" />
            Masuk dengan Google
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
