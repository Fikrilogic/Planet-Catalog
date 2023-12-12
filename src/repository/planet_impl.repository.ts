import Planet from "../model/planet";
import { DEFAULT_URL } from "../shared";
import { ApiResponse } from "../shared/network/api.response";
import { PlanetRepository } from "./planet.repository";
import { AxiosStatic } from 'axios'

export 

class PlanetRepositoryImpl  implements PlanetRepository {
    
    axios: AxiosStatic
    
    constructor(axios: AxiosStatic){
        this.axios = axios
    }
    
    async get(): Promise<ApiResponse<Array<Planet>>> {
        const response = await this.axios.get<ApiResponse<Array<Planet>>>(`${DEFAULT_URL}/planets`)

        return response.data
    }

    async getById(id: string): Promise<Planet> {
        return await this.axios.get(`${DEFAULT_URL}/planets/${id}`)
    }
}

export default PlanetRepositoryImpl