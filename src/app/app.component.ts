import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routeAnimations } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeAnimations]
})
export class AppComponent {

  getRouterOutletState(routerOutlet: RouterOutlet) {
    return routerOutlet.isActivated ? routerOutlet.activatedRoute : '';
  }
}

