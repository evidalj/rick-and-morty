import { axiosConfig } from "./axios-config";
import { AxiosInstance, AxiosResponse, AxiosError } from 'axios';


class API {
    private axios: AxiosInstance = axiosConfig;

    private async post(uri: string, data: any): Promise<AxiosResponse> {
        try {
            return this.axios.post(uri, data);
        } catch (error: any) {
            return error;
        }
    };

    public async get(uri: string, params: any): Promise<AxiosResponse> {
        try {
            return this.axios.get(`${uri}${params}`);
        } catch (error: any) {
            return error;
        }
    }
}

export default API;