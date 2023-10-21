import houseRepository from '@src/repositories/house.repository';

describe('HouseRepository', () => {
    it("creates a house", async () => {
        await houseRepository.create();
    })
});