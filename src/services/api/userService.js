import axios from "axios";

const BASE_URL = import.meta.env.VITE_APP_API_URL;
if (!BASE_URL) {
  throw new Error(`VITE_APP_API_URL tidak terdefinsi!!`);
}

const resourcePath = "/myUsers";

const API_URL = `${BASE_URL}${resourcePath}`;

const apiClient = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getAllUsers = async () => {
  try {
    const response = await apiClient.get("/");
    return response.data;
  } catch (error) {
    console.error(`Gagal mengambil data users:`, error.message);
    throw error;
  }
};

export const getUserById = async (id) => {
  try {
    const response = await apiClient.get(`/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Gagal mengambil data users dengan ID ${id}:`, error.message);
    throw error;
  }
};

export const createUser = async (userData) => {
  try {
    const response = await apiClient.post("/", userData);
    return response.data;
  } catch (error) {
    console.error(`Gagal membuat data user:`, error.message);
    throw error;
  }
};

export const updateUser = async (id, userData) => {
  try {
    const response = await apiClient.put(`/${id}`, userData);
    return response.data;
  } catch (error) {
    console.error(`gagal update data user ${id}:`, error.message);
    throw error;
  }
};

export const deleteUser = async (id) => {
  try {
    const response = await apiClient.delete(`/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Gagal hapus user ${id}:`, error.message);
    throw error;
  }
};

export const login = async (email, password) => {
  try {
    const users = await getAllUsers();
    const user = users.find(
      (u) => u.email === email && u.password === password
    );
    return user || null;
  } catch (error) {
    console.error("Login error:", error.message);
    throw error;
  }
};
