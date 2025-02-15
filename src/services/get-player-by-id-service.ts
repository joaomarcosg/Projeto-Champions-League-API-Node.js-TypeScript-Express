import { GetPlayerByIdRepository } from "../repositories/get-player-by-id-repository";
import * as HttpResponse from "../utils/http-helper";

export class GetPlayerByIdService {

    getPlayerRepository: GetPlayerByIdRepository;

    constructor (getPlayerRepository = new GetPlayerByIdRepository()) {
        this.getPlayerRepository = getPlayerRepository;
    }

    getPlayerById = async (id: number) => {

        const data = await this.getPlayerRepository.getPlayerById(id);

        let response = null;

        if (data) {
            response = await HttpResponse.okay(data);
        } else {
            response = await HttpResponse.noContent();
        }

        return response;

    }

}