import fs from "fs/promises";
import { PlayerModel } from "../models/player-model";

export class CreatePlayerRepository {

    createPlayer = async (player: PlayerModel) => {

        const data = await fs.readFile("./src/database/players.json", "utf-8");
        const players: PlayerModel[] = JSON.parse(data || '[]');
        players.push(player);

        const jsonString = JSON.stringify(players);
        await fs.writeFile("./src/database/players.json", jsonString);

    }

}