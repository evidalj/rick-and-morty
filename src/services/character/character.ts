import { AxiosError } from "axios";
import response, { info } from "../../types/response";
import API from "../API";

class Character extends API {
    private static character: Character;
    private URI: string = process.env.REACT_APP_CHARACTER as string;
    private DEFAULT_INFO: info = {
        count: 1,
        pages: 1,
        prev: null,
        next: null
    };
    public static getInstance(): Character {
        if (!this.character) {
            this.character = new Character();
        }
        return this.character;
    }

    public static createInstance(): Character {
        return new Character();
    }

    public async getByname(params: string): Promise<response> {
        try {
            const response = await this.get<response>(this.URI, params);
            console.log('response getByname', response);
            return response;
        } catch (error) {
            return {
                info: this.DEFAULT_INFO,
                results: [],
                error: "An error ocurred"
            };
        }
    }

    public async getAll(): Promise<response> {
        try {
            return await this.get<response>(`${this.URI}`, "");
        } catch (error) {
            return {
                info: this.DEFAULT_INFO,
                results: [],
                error: "An error ocurred"
            };
        }

    }
}

export default Character;
