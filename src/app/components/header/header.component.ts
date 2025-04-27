import { Component, input } from "@angular/core";

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <header class="header">
      <div class="left-section">
        <h1>COFFEE MAKERY</h1>
      </div>
      
      <div class="right-section">
        <nav>
          <a routerLink="/">HOME</a>
          <a routerLink="/">COFFEE</a>
          <a routerLink="/">SHOP</a>
        </nav>
        @if (selectedCoffee()) {
          <div class="selected-coffee">Selected: {{ selectedCoffee() }}</div>
        }
      </div>
    </header>
  `,
  styles: [`
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem;
      background: #6F4E37;
      color: white;
    }
    
    .left-section {
      flex: 1;
    }
    
    .center-section {
      flex: 2;
      display: flex;
      justify-content: center;
    }
    
    .right-section {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      gap: 1.5rem;
    }
    
    nav {
      display: flex;
      gap: 1rem;
    }
    
    .selected-coffee {
      background: white;
      color: #6F4E37;
      padding: 0.5rem;
      border-radius: 4px;
      font-size: 0.9rem;
    }
  `]
})
export class HeaderComponent {
  selectedCoffee = input<string>('');
}