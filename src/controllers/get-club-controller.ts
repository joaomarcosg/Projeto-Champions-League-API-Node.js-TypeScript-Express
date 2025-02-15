import { Request, Response } from "express";
import { GetClubsService } from "../services/get-club-service";

export class GetClubsController {

    clubService: GetClubsService;

    constructor (clubService = new GetClubsService) {
        this.clubService = clubService;
    }

    getClubs = async (request: Request, response: Response) => {
        
        const httpResponse = await this.clubService.getClubs();
        response.status(httpResponse.statusCode).json(httpResponse.body);
    }
}