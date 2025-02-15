import fs from "fs/promises";
import { PlayerModel } from "../models/player-model";

export class GetPlayerRepository {

    getPlayers = async (): Promise<PlayerModel[]> => {

        const data = await fs.readFile("./src/database/players.json", "utf-8");
        const players: PlayerModel[] = JSON.parse(data);

        return players;

    }

}