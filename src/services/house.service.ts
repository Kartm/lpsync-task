import HouseRepository from '../repositories/house.repository';
import {HouseCreate} from "../models/house.model";

const findAll = async ({page, pageSize, sort, latitude, longitude}: {page: number, pageSize: number, sort?: string, latitude?: number, longitude?: number}) => {
  return HouseRepository.findAll({page, pageSize, sort, latitude, longitude});
}

const create = async (newHouse: HouseCreate) => {
  return HouseRepository.create(newHouse);
}

export default {
  findAll,
  create
}