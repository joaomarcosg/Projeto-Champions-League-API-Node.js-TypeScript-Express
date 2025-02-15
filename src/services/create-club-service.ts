import { ClubsModel } from "../models/clubs-model";
import { CreateClubRepository } from "../repositories/create-club-repository";
import * as HttpResponse from "../utils/http-helper";

export class CreateClubService {

    createClubRepository: CreateClubRepository;

    constructor (createClubRepository = new CreateClubRepository()) {
        this.createClubRepository = createClubRepository;
    }

    createClub = async (club: ClubsModel) => {

        let response = null;

        if (Object.keys(club).length !== 0) {
            await this.createClubRepository.createClub(club);
            response = HttpResponse.created();
        } else {
            response = await HttpResponse.badRequest();
        }

        return response;

    }

}