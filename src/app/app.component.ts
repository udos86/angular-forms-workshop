import { Component } from '@angular/core';
import { RouterOutlet, ActivatedRoute } from '@angular/router';
import { routeAnimations } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeAnimations]
})
export class AppComponent {

  getActivatedRoute(routerOutlet: RouterOutlet): ActivatedRoute | string {
    return routerOutlet.isActivated ? routerOutlet.activatedRoute : '';
  }
}

