import { Application } from '@nativescript/core';
import { NavigationService } from './services/navigation.service';
import { TruckStopService } from './services/truck-stop.service';

// Register services
Application.setResources({
  navigationService: new NavigationService(),
  truckStopService: new TruckStopService()
});

Application.run({ moduleName: 'app-root' });