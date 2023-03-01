import { Injectable } from '@angular/core';
import { Products } from './products';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Products[] = [];

  getShippingPrices(){
    return this.http.get<{type: String, price: number}[]>
  ('/assets/shipping.json');
  }

  addToCart(product: Products) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  constructor(
    private http: HttpClient
  ) { }
}
