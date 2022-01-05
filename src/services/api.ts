import { log } from "console";

export default class ApiService {
    _apiBaseUrl = `http://localhost:3000`;

     getResource = async (url:string) =>{
        const res = await  fetch(`${this._apiBaseUrl}${url}`);

        if (!res.ok) {
            throw new Error (`Could not fetch resource: ${url} - status: ${res.status}`);
        }

        return await res.json();
    }

    getAllCars = async () => {
        return await this.getResource(`/cars`);
    }

    getCar = async (id: string | undefined | number) => {
        return await this.getResource(`/cars/${id}`);
    }
}