import { Component, input } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <header class="header">
      <h1>COFFEE MAKERY</h1>
      <nav>
        <a routerLink="/">HOME</a>
        <a routerLink="/">COFFEE</a>
        <a routerLink="/">SHOP</a>
      </nav>
      @if (selectedCoffee()) {
        <div class="selected-coffee">Selected: {{ selectedCoffee() }}</div>
      }
    </header>
  `,
  styles: [`
    .header {
      background: #6F4E37;
      color: white;
      padding: 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    nav a {
      color: white;
      margin: 0 1rem;
      text-decoration: none;
    }
    .selected-coffee {
      background: white;
      color: #6F4E37;
      padding: 0.5rem;
      border-radius: 4px;
    }
  `]
})
export class HeaderComponent {
  selectedCoffee = input<string>('');
}