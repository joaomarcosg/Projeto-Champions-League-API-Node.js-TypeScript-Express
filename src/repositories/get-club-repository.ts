import fs from "fs/promises";
import { ClubsModel } from "../models/clubs-model";

export class GetClubsRepository {

    getClubs = async (): Promise<ClubsModel[]> => {

        const data = await fs.readFile("./src/database/clubs.json", "utf-8");
        const clubs: ClubsModel[] = JSON.parse(data);

        return clubs;

    }
}