import fs from "fs/promises";
import { PlayerModel } from "../models/player-model";

export class GetPlayerByIdRepository {

    getPlayerById = async (id: number): Promise<PlayerModel | undefined> => {

        const data = await fs.readFile("./src/database/players.json", "utf-8");
        const players: PlayerModel[] = JSON.parse(data);

        const player =  players.find(player => player.id === id);
        return player;

    }

}