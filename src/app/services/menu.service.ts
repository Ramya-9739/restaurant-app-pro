import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private menuItems = [
    { id: 1, name: 'Neon Sushi Roll', price: 18.0, mood: 'Happy', image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=400', description: 'Fresh salmon with a neon spicy mayo drizzle.' },
    { id: 2, name: 'Midnight Burger', price: 14.5, mood: 'Hungry', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400', description: 'Double beef for those late-night cravings.' },
    { id: 3, name: 'Dreamy Truffle Pasta', price: 19.0, mood: 'Relax', image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=400', description: 'Creamy pasta to help you unwind.' },
    { id: 4, name: 'Cyber Glow Salad', price: 12.0, mood: 'Healthy', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400', description: 'Nutrient-rich greens with citrus dressing.' },
    { id: 5, name: 'Electric Wings', price: 13.0, mood: 'Happy', image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=400', description: 'Spicy buffalo glaze that pops.' },
    { id: 6, name: 'Zen Risotto', price: 16.5, mood: 'Relax', image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=400', description: 'Mushroom medley in a calm, creamy base.' },
    { id: 7, name: 'Monster Steak', price: 28.0, mood: 'Hungry', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400', description: 'Massive protein for extreme hunger.' },
    { id: 8, name: 'Vibe-Check Salmon', price: 22.0, mood: 'Healthy', image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400', description: 'Clean fats and high energy.' },
    { id: 9, name: 'Pink Glaze Lava Cake', price: 9.0, mood: 'Happy', image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=400', description: 'Warm chocolate with neon berry sauce.' },
    { id: 10, name: 'Chill-Out Poke Bowl', price: 17.0, mood: 'Relax', image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400', description: 'Fresh fish and rice to calm your soul.' },
 
    { id: 11, name: 'Beast Mode Tacos', price: 15.0, mood: 'Hungry', image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400', description: 'Loaded with spicy beef and cheese.' },
    { id: 12, name: 'Low-Light Quinoa', price: 14.0, mood: 'Healthy', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400', description: 'Superfood bowl for a healthy night.' }
  ];

  getMenuItems() { return this.menuItems; }
}