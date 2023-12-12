import Planet from "../model/planet";
import { ApiResponse } from "../shared/network/api.response";

export interface PlanetRepository{
    get(): Promise<ApiResponse<Array<Planet>>>
}