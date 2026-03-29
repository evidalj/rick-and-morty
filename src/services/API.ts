import axiosConfig from "./axios-config";
import { AxiosInstance, AxiosResponse } from 'axios';


class API {
    private axios: AxiosInstance = axiosConfig;

    private async post(uri: string, data: any): Promise<AxiosResponse> {
        try {
            return await this.axios.post(uri, data);
        } catch (error: any) {
            return error;
        }
    };

    public async get<T>(uri: string, params: any): Promise<T> {
        try {
            // @ts-ignore
            return await this.axios.get<T>(`${uri}${params}`);
        } catch (error: any) {
            throw new Error("Error fetching data");
        }
    }
}

export default API;