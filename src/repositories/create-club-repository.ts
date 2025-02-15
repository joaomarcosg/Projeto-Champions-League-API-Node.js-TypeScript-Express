import fs from "fs/promises";
import { ClubsModel } from "../models/clubs-model";

export class CreateClubRepository {

    createClub = async (club: ClubsModel) => {

        const data = await fs.readFile("./src/database/clubs.json", "utf-8");
        const clubs: ClubsModel[] = JSON.parse(data);
        clubs.push(club);

        const clubsString = JSON.stringify(clubs);
        await fs.writeFile("./src/database/clubs.json", clubsString);

    }
}