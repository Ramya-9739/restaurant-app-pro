import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav class="glass-navbar">
      <div class="logo" routerLink="/">FineDine 🍽️</div>
      <div class="nav-links">
        <a routerLink="/menu" routerLinkActive="active">Menu</a>
        <a routerLink="/cart" routerLinkActive="active">Cart ({{cartCount}})</a>
      </div>
    </nav>
  `,
 
})
export class NavbarComponent implements OnInit {
  cartCount = 0;
  constructor(private cartService: CartService) {}
  ngOnInit() {
    this.cartService.cart$.subscribe(items => this.cartCount = items.length);
  }
  
}