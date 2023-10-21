import {Router} from "express";
import jetValidator from 'jet-validator';

import houseController from "../controllers/house.controller";
import {isHouse} from "../models/house.model";
const validator = jetValidator();

const router = Router();

router.get("/", validator(['name', isHouse]), houseController.getHouses);

router.post("/", validator(['name', isHouse]), houseController.createHouse);

router.put("/:id", validator(['name', isHouse]), houseController.updateHouse);

export default router;