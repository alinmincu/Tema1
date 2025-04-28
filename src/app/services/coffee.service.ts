import { Injectable, signal } from '@angular/core';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  category: 'coffee' | 'dessert';
  imageUrl: string;
}

@Injectable({ providedIn: 'root' })
export class CoffeeService {
  private allProducts = signal<Product[]>([
    {
      id: 1,
      name: 'Espresso',
      price: 199,
      description: 'Rich Italian-style concentrated coffee shot with golden crema',
      category: 'coffee',
      imageUrl: 'https://tinyurl.com/5a4wjxjj'
    },
    {
      id: 2,
      name: 'Iced Coffee',
      price: 149,
      description: 'Cold refreshing coffee drink, perfect for summer days',
      category: 'coffee',
      imageUrl: 'https://tinyurl.com/jr35b3x4'
    },
    {
      id: 3,
      name: 'Chocolate Ice Cream',
      price: 189,
      description: 'Refreshing chocolate dessert',
      category: 'dessert',
      imageUrl: 'https://tinyurl.com/2mbss2x6'
    },
    {
      id: 4,
      name: 'Cappuccino',
      price: 179,
      description: '1/3 espresso, 1/3 steamed milk, 1/3 foam - perfection',
      category: 'coffee',
      imageUrl: 'https://tinyurl.com/2ftvjknw'
    },
    {
      id: 5,
      name: 'Chocolate Cake',
      price: 129,
      description: 'Rich and moist chocolate cake',
      category: 'dessert',
      imageUrl: 'https://tinyurl.com/4kpumyzz'
    },
    {
      id: 6,
      name: 'Latte',
      price: 169,
      description: 'Smooth espresso with velvety steamed milk in perfect harmony',
      category: 'coffee',
      imageUrl: 'https://tinyurl.com/3xu94wxr'
    },
    {
      id: 7,
      name: 'Tiramisu',
      price: 159,
      description: 'Classic coffee Italian dessert',
      category: 'dessert',
      imageUrl: 'https://tinyurl.com/bdzmm5ze'
    },
    {
      id: 8,
      name: 'Cannoli',
      price: 139,
      description: 'Italian pastry dessert',
      category: 'dessert',
      imageUrl: 'https://tinyurl.com/nmw3xk8h'
    }
  ]);

  filteredProducts = signal<Product[]>(this.allProducts());

  searchProducts(query: string) {
    if (!query.trim()) {
      this.filteredProducts.set(this.allProducts());
      return;
    }
    this.filteredProducts.set(
      this.allProducts().filter(p =>
        p.name.toLowerCase().includes(query.toLowerCase())
      )
    );
  }
}