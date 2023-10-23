import {pool} from "../db/db";
import {House, HouseCreate} from "../models/house.model";

const findAll = async ({page, pageSize, sort, longitude, latitude}: {page: number, pageSize: number, sort?: string, latitude?: number, longitude?: number}) => {
    try {
        const limit = pageSize;
        const offset = (limit * page) - limit;

        let query = `SELECT id, name, "roomsCount", location, "builtAt" FROM houses LIMIT $1 OFFSET $2`;
        const params: (string | number)[] = [limit, offset];


        // todo validate
        const orders: {
            order: "ASC" | "DESC",
            param: string,
        }[] = [];

        if (sort?.length) {
            const desc = sort.startsWith("-");

            orders.push(
                {
                    order: desc ? "DESC" : "ASC",
                    param: desc ? sort.substring(1) // remove "-" prefix
                        : sort
                }
            )
        }

        if (longitude !== undefined && latitude !== undefined) {
            // order by st_distance(geom,client_point)
            orders.push(
                {
                    order: "DESC",
                    param: `st_distance(location,client_point)` // todo pass POINT($3, $4)
                }
            )
        }

        const res = await pool.query(query, params)
        return res.rows as House[];
    } catch (e) {
        console.error(e);
    }
}

const create = async (newHouse: HouseCreate) => {
    const query = 'INSERT INTO houses(name, roomsCount, location, builtAt) VALUES($1, $2, ST_SetSRID(ST_POINT($3, $4), $5) RETURNING *';
    const params = [newHouse.name, newHouse.roomsCount, newHouse.location.latitude, newHouse.location.longitude, newHouse.builtAt];

    const res = await pool.query(query, params);
    return res.rows[0] as House;
}

export default {
    findAll,
    create,
}
