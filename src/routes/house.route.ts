import express from "express";

import {getHouses} from "../controllers/house.controller";

const router = express.Router();

router.get("/houses", getHouses);

// router.get("/products/:id", getProduct);
//
// router.post("/products", createProduct);
//
// router.patch("/products/:id", updateProduct);
//
// router.delete("/products/:id", deleteProduct);

export default router;