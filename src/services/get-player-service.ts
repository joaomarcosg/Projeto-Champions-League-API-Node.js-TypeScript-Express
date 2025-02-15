import { GetPlayerRepository } from "../repositories/get-player-repository";
import * as HttpResponse from "../utils/http-helper";

export class GetPlayerService {

    getPlayerRepository: GetPlayerRepository;

    constructor (getPlayerRepository = new GetPlayerRepository) {
        this.getPlayerRepository = getPlayerRepository;
    }

    getPlayers = async () => {

        const data = await this.getPlayerRepository.getPlayers();
        const response = HttpResponse.okay(data);

        return response;
    }
}