import {Request, Response} from "express";

import houseService from "../services/house.service";

const getHouses = async (req: Request, res: Response) => {
    try {
        let page = req.query.page;
        let limit = req.query.limit;

        // let articles = await Article.findAll().paginate({page: page, limit: limit}).exec();

        const products = await houseService.getAll();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json(error);
    }
};

const createHouse = async (req: Request, res: Response) => {

};

const updateHouse = async (req: Request, res: Response) => {

};

export default {
    getHouses,
    createHouse,
    updateHouse
}