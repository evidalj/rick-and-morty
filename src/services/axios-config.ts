import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";

const axiosConfig: AxiosInstance = axios.create({
    baseURL: `${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_CONVENTION}`
});

axiosConfig.interceptors.response.use(
    <T>(response: AxiosResponse<T>): T => response.data,
    (error:AxiosError) => Promise.reject(error)
);

export default axiosConfig;
