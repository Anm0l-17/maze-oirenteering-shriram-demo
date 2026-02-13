import axios from "axios";

const API = axios.create({
    baseURL: "https://maze-oirenteering-shriram-demo.onrender.com/api"
});
console.log("API Base URL:", "https://maze-oirenteering-shriram-demo.onrender.com/api");

// 🔥 Attach JWT automatically
API.interceptors.request.use((req) => {
    const token = localStorage.getItem("token");

    if (token) {
        req.headers.Authorization = `Bearer ${token}`;
    }

    return req;
});

export default API;
