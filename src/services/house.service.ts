import HouseRepository from '../repositories/house.repository';

const getAll = async () => {
  return HouseRepository.getAll();
}

export default {
  getAll
}