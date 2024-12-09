export interface Route {
  id: string;
  name: string;
  startPoint: Coordinates;
  endPoint: Coordinates;
  restrictions: RouteRestriction[];
  truckFriendly: boolean;
  estimatedTime: number;
  distance: number;
}

export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface RouteRestriction {
  type: 'height' | 'weight' | 'width' | 'restriction' | 'roadwork';
  description: string;
  location: Coordinates;
}