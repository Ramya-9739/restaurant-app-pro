export interface MenuItem {
  id: number;
  name: string;
  price: number;
  description: string;
  category?: string; // e.g., 'Main', 'Starter', 'Dessert'
}