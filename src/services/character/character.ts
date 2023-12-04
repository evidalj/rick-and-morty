import API from "../API";

class Character extends API {
    private static character: Character;
    private URI: string = process.env.REACT_APP_CHARACTER as string;
    public static getInstance(): Character {
        if (!this.character) {
            this.character = new Character();
        }
        return this.character;
    }

    public static createInstance(): Character {
        return new Character();
    }

    public async getByname(params: string) {
        const response = await this.get(this.URI, params);
        return response.data;
    }

    public async getAll() {
        const response = await this.get(this.URI, "");
        return response.data;
    }

    public async goPage(page: string) {
        const params = `page=`
    }
}

export default Character;