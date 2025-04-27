import { Component, inject, output } from '@angular/core';
import { CoffeeService } from '../../services/coffee.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-coffee-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './coffee-list.component.html',
  styles: [`
    .menu-section {
      padding: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }
    .section-title {
      color: #6F4E37;
      border-bottom: 2px solid #6F4E37;
      padding-bottom: 0.5rem;
    }
    .product-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 1.5rem;
      margin: 2rem 0;
    }
    .product-card {
      background: white;
      border-radius: 8px;
      padding: 1.5rem;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .product-name {
      color: #6F4E37;
      margin: 0 0 0.5rem 0;
    }
    .product-price {
      font-weight: bold;
      color: #333;
      margin: 1rem 0;
    }
    .order-btn {
      background: #6F4E37;
      color: white;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      cursor: pointer;
      width: 100%;
    }
    .product-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 8px 8px 0 0;
    background-color: #f5f5f5;
  }
  `]
})
export class CoffeeListComponent {
  coffeeService = inject(CoffeeService);
  order = output<string>();

  onOrder(productName: string) {
    console.log(`Ordered: ${productName}`);
    this.order.emit(productName);
  }

  handleImageError(event: Event) {
    const imgElement = event.target as HTMLImageElement;
    imgElement.src = 'https://via.placeholder.com/600x400?text=Image+Not+Available';
    imgElement.alt = 'Placeholder image';
  }
}