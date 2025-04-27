import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoffeeService } from './services/coffee.service';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { WelcomeBannerComponent } from './components/welcome-banner/welcome-banner.component';
import { CoffeeListComponent } from './components/coffee-list/coffee-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    SearchComponent,
    WelcomeBannerComponent
  ],
  template: `
    <app-header [selectedCoffee]="selectedCoffee"></app-header>
    <app-search (search)="onSearch($event)"></app-search>
    <app-welcome-banner></app-welcome-banner>
    <router-outlet (activate)="onRouterOutletActivate($event)"></router-outlet>
  `
})
export class AppComponent {
  selectedCoffee = '';

  constructor(private coffeeService: CoffeeService) { }

  onSearch(query: string) {
    this.coffeeService.searchProducts(query);
  }

  onRouterOutletActivate(component: any) {
    if (component instanceof CoffeeListComponent) {
      component.order.subscribe((name: string) => {
        this.selectedCoffee = name;
      });
    }
  }
}