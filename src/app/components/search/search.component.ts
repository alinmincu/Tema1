import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="search-container">
      <input
        type="text"
        [(ngModel)]="searchQuery"
        (ngModelChange)="onSearch()"
        placeholder="Search product..."
      >
    </div>
  `,
  styles: [`
    .search-container {
      padding: 1rem;
      text-align: center;
    }
    input {
      padding: 0.5rem 1rem;
      width: 300px;
      border: 1px solid #6F4E37;
      border-radius: 20px;
    }
  `]
})
export class SearchComponent {
  searchQuery = '';
  search = output<string>();

  onSearch() {
    this.search.emit(this.searchQuery);
  }
}