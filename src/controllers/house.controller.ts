import {Request, Response} from "express";

import houseService from "../services/house.service";
import {HouseCreate} from "../models/house.model";

const ERROR_MESSAGES = {
    PAGE_MISSING: {
        message: "Page parameter is missing",
        status: 400,
    }
}


const getHouses = async (req: Request, res: Response) => {
    try {
        // todo validation

        // assume it's not risky...
        const page = req.query.page as unknown as number ?? 1;
        const pageSize = req.query.pageSize as unknown as number ?? 5;

        // e.g. roomsCount, -roomsCount, builtDate, -builtDate
        const sort = req.query.sort as unknown as (string | undefined);

        // e.g. &latitude=50.830228&longitude=19.942506
        const latitude = req.query.latitude as unknown as (number | undefined);
        const longitude = req.query.longitude as unknown as (number | undefined);

        const products = await houseService.findAll({page, pageSize, sort, latitude, longitude});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json(error);
    }
};

const createHouse = async (req: Request, res: Response) => {
    try {
        const newHouse: HouseCreate = req.body;
        const house = await houseService.create(newHouse);
        res.status(200).json(house);
    } catch (error) {
        res.status(500).json(error);
    }
};

export default {
    getHouses,
    createHouse
}