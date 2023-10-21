import {pool} from "../db/db";
import {House, HouseCreate} from "../models/house.model";

const create = async (newHouse: HouseCreate) => {
    const text = 'INSERT INTO houses(name, roomsCount, location, builtAt) VALUES($1, $2, ST_SetSRID(ST_POINT($3, $4), $5) RETURNING *'
    const values = [newHouse.name, newHouse.roomsCount, newHouse.location.latitude, newHouse.location.longitude, newHouse.builtAt]

    const res = await pool.query(text, values)

    return res.rows[0] as House;
}

export default {
    create,
    getAll() {
        return Promise.resolve([]);
    }
}
