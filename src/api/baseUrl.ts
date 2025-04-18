import axios from "axios";

const apiKey = import.meta.env.VITE_API_KEY;
const baseUrl = import.meta.env.VITE_BASE_URL;

// Creating a base url for fetching data
const baseURL = axios.create({
    baseURL:`${baseUrl}${apiKey}`
})

export default baseURL