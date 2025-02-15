import { Request, Response } from "express";
import { GetPlayerByIdService } from "../services/get-player-by-id-service";

export class GetPlayerByIdController {

    playerService: GetPlayerByIdService;

    constructor (playerService = new GetPlayerByIdService) {
        this.playerService = playerService;
    }

    getPlayerById = async (request: Request, response: Response) => {

        const id = parseInt(request.params.id);
        const httpResponse = await this.playerService.getPlayerById(id);
        response.status(httpResponse.statusCode).json(httpResponse.body);
        
    }
}