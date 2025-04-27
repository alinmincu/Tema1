import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome-banner',
  standalone: true,
  template: `
    <div class="welcome-banner">
      <h2>WELCOME TO THE COFFEE MAKERY</h2>
      <h1>We serve the richest coffee in the city!</h1>
    </div>
  `,
  styles: [`
    .welcome-banner {
      text-align: center;
      padding: 2rem;
      background: #f5f5f5;
      margin-bottom: 2rem;
    }
    h1 {
      color: #6F4E37;
      margin-top: 0.5rem;
    }
  `]
})
export class WelcomeBannerComponent { }