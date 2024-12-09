import { Observable, Geolocation } from '@nativescript/core';
import { Route, Coordinates, RouteRestriction } from '../models/route.model';

export class NavigationService extends Observable {
    private currentLocation: Coordinates;
    private destination: Coordinates;
    private activeRoute: Route;
    private drivingStartTime: Date;

    constructor() {
        super();
        this.startLocationTracking();
        this.drivingStartTime = new Date();
    }

    private async startLocationTracking() {
        const location = await Geolocation.getCurrentLocation({
            desiredAccuracy: 3,
            updateDistance: 10,
            maximumAge: 20000,
        });
        
        this.currentLocation = {
            latitude: location.latitude,
            longitude: location.longitude
        };
    }

    public async getCurrentLocation(): Promise<Coordinates> {
        return this.currentLocation;
    }

    public async calculateRoutes(destination: Coordinates): Promise<Route[]> {
        // Implementation for calculating truck-specific routes
        return [];
    }

    public checkRestrictions(route: Route): RouteRestriction[] {
        // Implementation to check for truck-specific restrictions
        return [];
    }

    public checkRestBreak(drivingTime: number): boolean {
        const MAX_DRIVING_TIME = 4 * 60 * 60 * 1000; // 4 hours in milliseconds
        const timeDriving = new Date().getTime() - this.drivingStartTime.getTime();
        return timeDriving >= MAX_DRIVING_TIME;
    }
}