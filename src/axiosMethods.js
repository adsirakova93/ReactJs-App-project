import axios from "axios";

const BASE_URL = "https://e-store.com/";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
