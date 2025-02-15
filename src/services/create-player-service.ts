import { PlayerModel } from "../models/player-model";
import * as HttpResponse from "../utils/http-helper";
import { CreatePlayerRepository } from "../repositories/create-player-repository";

export class CreatePlayerService {

    createPlayerRepository: CreatePlayerRepository;
    
    constructor (createPlayerRepository = new CreatePlayerRepository()) {
        this.createPlayerRepository = createPlayerRepository;
    }

    createPlayer = async (player: PlayerModel) => {

        let response = null;

        if (Object.keys(player).length !== 0) {
            await this.createPlayerRepository.createPlayer(player);
            response = await HttpResponse.created();
        } else {
            response = await HttpResponse.badRequest();
        }

        return response;

    }

}