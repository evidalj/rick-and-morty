import axios, {AxiosInstance} from "axios";

export const axiosConfig: AxiosInstance = axios.create({
    baseURL: `${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_CONVENTION}`
});

