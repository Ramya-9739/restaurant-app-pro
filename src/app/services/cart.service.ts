import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items = new BehaviorSubject<any[]>([]);
  // Renamed to cart$ to match your Navbar's expectations
  cart$ = this.items.asObservable(); 

  addToCart(product: any) {
    const currentItems = this.items.value;
    this.items.next([...currentItems, product]);
  }

  getItems() {
    return this.cart$;
  }

  // FIXED: Added updateCart for the Cart Component
  updateCart(updatedItems: any[]) {
    this.items.next(updatedItems);
  }

  clearCart() {
    this.items.next([]);
  }

  getTotal() {
    return this.items.value.reduce((acc, item) => acc + item.price, 0);
  }
}