import { Request, Response } from "express";
import { CreateClubService } from "../services/create-club-service";

export class PostClubController {
    
    clubService: CreateClubService;

    constructor (clubService = new CreateClubService()) {
        this.clubService = clubService;
    }

    createClub = async (request: Request, response: Response) => {

        const bodyValue = request.body;

        const httpResponse = await this.clubService.createClub(bodyValue);

        if (httpResponse) {
            response.status(httpResponse.statusCode).json(httpResponse.body);
        }

    }
}