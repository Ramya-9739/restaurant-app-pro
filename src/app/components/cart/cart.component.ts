import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    // Correctly subscribing to the Observable from the service
    this.cartService.getItems().subscribe(items => {
      this.cartItems = items;
    });
  }

  getGrandTotal() {
    return this.cartItems.reduce((acc, item) => acc + item.price, 0);
  }

  removeItem(index: number) {
    // 1. Create a copy of the current items
    const updatedItems = [...this.cartItems];
    
    // 2. Remove the item at the specific index
    updatedItems.splice(index, 1);
    
    // 3. Tell the service to update everyone (including the navbar count)
    this.cartService.updateCart(updatedItems);
  }
}