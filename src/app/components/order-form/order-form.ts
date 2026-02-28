import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-order-form',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './order-form.html',
  styleUrls: ['./order-form.css']
})
export class OrderFormComponent {
  isOrderComplete = false;

  constructor(public cartService: CartService, private router: Router) {}

  submitOrder() {
    this.isOrderComplete = true;
    this.cartService.clearCart();
    
    // Auto-redirect home after 5 seconds
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 5000);
  }
}