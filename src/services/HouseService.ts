import HouseRepository from '@src/repositories/house.repository';

const getAll = async () => {
  return HouseRepository.getAll();
}

export default {
  getAll
}