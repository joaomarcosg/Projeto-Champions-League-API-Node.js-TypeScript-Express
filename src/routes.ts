import { Router } from "express";
import { PostPlayerController } from "./controllers/post-player-controller";
import { GetPlayerController } from "./controllers/get-player-controller";
import { GetPlayerByIdController } from "./controllers/get-player-by-id-controller";
import { PostClubController } from "./controllers/post-club-controller";
import { GetClubsController } from "./controllers/get-club-controller";


const router = Router();

const postPlayerController = new PostPlayerController();
const getPlayerController = new GetPlayerController();
const getPlayerByIdController = new GetPlayerByIdController();

const postClubController = new PostClubController();
const getClubsController = new GetClubsController();


router.post("/players", postPlayerController.createPlayer);
router.get("/players", getPlayerController.getPlayer);
router.get("/players/:id", getPlayerByIdController.getPlayerById);

router.post("/clubs", postClubController.createClub);
router.get("/clubs", getClubsController.getClubs);


export default router;