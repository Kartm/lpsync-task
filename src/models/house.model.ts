export type HouseCreate = {
  name: string;
  roomsCount: number;
  builtAt: string;
  location: {
    latitude: number;
    longitude: number;
  }
}

export type House = HouseCreate & {
  id: number;
}

export const isHouse = () => {
  return true;
}