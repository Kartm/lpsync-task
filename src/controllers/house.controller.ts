import {Request, Response} from "express";

import houseService from "@src/services/HouseService";

export const getHouses = async (_: Request, res: Response) => {
    try {
        const products = await houseService.getAll();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json(error);
    }
};