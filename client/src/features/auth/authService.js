import axios from "axios";

const API_URL = "/api/users/";

// Register user
const register = async (userData) => {
  const { data } = await axios.post(API_URL + "register", userData);

  if (data) {
    localStorage.setItem("user", JSON.stringify(data));
  }
  return data;
};

// Login user
const login = async (userData) => {
  const { data } = await axios.post(API_URL + "login", userData);

  if (data) {
    localStorage.setItem("user", JSON.stringify(data));
  }

  return data;
};

// Logout user
const logout = () => {
  localStorage.removeItem("user");
};

const balanceUpdate = async (token) => {
  const { data } = await axios.get(API_URL + "me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};

const authService = {
  balanceUpdate,
  register,
  logout,
  login,
};

export default authService;
