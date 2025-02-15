import { GetClubsRepository } from "../repositories/get-club-repository";
import * as HttpResponse from "../utils/http-helper";

export class GetClubsService {
    
    getClubsRepository: GetClubsRepository;

    constructor (getClubsRepository = new GetClubsRepository()) {
        this.getClubsRepository = getClubsRepository;
    }

    getClubs = async () => {

        const data = await this.getClubsRepository.getClubs();
        const response = HttpResponse.okay(data);

        return response;
    }

}