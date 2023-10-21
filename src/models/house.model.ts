export type House = {
  id: number;
  name: string;
  roomsCount: number;
  builtAt: string;
  location: {
    latitude: number;
    longitude: number;
  }
}