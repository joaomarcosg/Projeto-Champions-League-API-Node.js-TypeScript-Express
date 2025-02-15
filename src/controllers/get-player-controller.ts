import { Request, Response } from "express";
import { GetPlayerService } from "../services/get-player-service";

export class GetPlayerController {

    playerService: GetPlayerService;

    constructor (playerService = new GetPlayerService()) {
        this.playerService = playerService;
    }

    getPlayer = async (request: Request, response: Response) => {

        const httpResponse = await this.playerService.getPlayers();
        response.status(httpResponse.statusCode).json(httpResponse.body);
    }
}