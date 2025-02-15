import { Request, Response } from "express";
import { CreatePlayerService } from "../services/create-player-service";

export class PostPlayerController {

    playerService: CreatePlayerService;

    constructor (playerService = new CreatePlayerService()) {
        this.playerService = playerService;
    }

    createPlayer = async (request: Request, response: Response) => {

        const bodyValue = request.body;

        const httpResponse = await this.playerService.createPlayer(bodyValue);

        if (httpResponse) {
            response.status(httpResponse.statusCode).json(httpResponse.body);
        }

    }
}