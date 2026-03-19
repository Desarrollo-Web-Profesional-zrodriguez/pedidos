import axios from "axios";

const API = axios.create({
    baseURL: import.meta.env.PROD
        ? "https://amiable-nourishment-production-76ea.up.railway.app/api/v1"
        : "http://localhost:3001/api/v1"
});

export default API;
