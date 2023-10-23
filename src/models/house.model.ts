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

// todo validate fields and field types
export const isHouse = () => {
  return true;
}