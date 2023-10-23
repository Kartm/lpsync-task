import {Router} from "express";
import jetValidator from 'jet-validator';

import houseController from "../controllers/house.controller";
import {isHouse} from "../models/house.model";
const validator = jetValidator();

const router = Router();

// todo missing validation
router.get("/houses", validator(['name', isHouse]), houseController.getHouses);

// todo missing validation
router.post("/houses", validator(['name', isHouse]), houseController.createHouse);

// todo missing update

export default router;