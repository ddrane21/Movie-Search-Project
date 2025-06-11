import axios from "axios";

const API_TOKEN = import.meta.env.VITE_TMDB_API_TOKEN;

const BASE_URL = 'https://api.themoviedb.org/3';

const tmdb = axios.create({
    baseURL : BASE_URL,
    headers: {
        Authorization: `Bearer ${API_TOKEN}`,
        accept: "application/json",
    },
});

export default tmdb;

