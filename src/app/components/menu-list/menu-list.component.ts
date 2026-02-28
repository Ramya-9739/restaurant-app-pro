import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuService } from '../../services/menu.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-menu-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {
  allMenuItems: any[] = [];
  filteredItems: any[] = [];
  selectedMood: string = 'All';

  constructor(
    private menuService: MenuService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.allMenuItems = this.menuService.getMenuItems();
    this.filteredItems = this.allMenuItems;
  }

  filterByMood(mood: string) {
    this.selectedMood = mood;
    if (mood === 'All') {
      this.filteredItems = this.allMenuItems;
    } else {
      this.filteredItems = this.allMenuItems.filter(item => item.mood === mood);
    }
  }

  addToCart(item: any) {
    this.cartService.addToCart(item);
    alert(`${item.name} added to cart!`);
  }
}