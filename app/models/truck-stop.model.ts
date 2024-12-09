export interface TruckStop {
  id: string;
  name: string;
  location: {
    latitude: number;
    longitude: number;
  };
  amenities: string[];
  fuelPrices: {
    diesel: number;
    gasoline: number;
  };
  isPartner: boolean;
  rating: number;
  reviews: number;
  openNow: boolean;
}