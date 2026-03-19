import axios from "axios";

const API = axios.create({
    baseURL: "https://amiable-nourishment-production-76ea.up.railway.app/api/v1"
    // baseURL: "http://localhost:3001/api/v1"
});

export default API;
