import { Observable } from '@nativescript/core';
import { TruckStop } from '../models/truck-stop.model';
import { Coordinates } from '../models/route.model';

export class TruckStopService extends Observable {
    private partnerStops: TruckStop[] = [];

    public async getNearbyStops(location: Coordinates, radius: number): Promise<TruckStop[]> {
        // Implementation to fetch nearby truck stops from API
        return [];
    }

    public async getPartnerStops(location: Coordinates): Promise<TruckStop[]> {
        // Implementation to fetch partner fuel stations
        return [];
    }

    public async getFuelPrices(stopId: string): Promise<{diesel: number, gasoline: number}> {
        // Implementation to get real-time fuel prices
        return { diesel: 0, gasoline: 0 };
    }
}