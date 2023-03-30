import { Injectable } from '@angular/core';
import { Cart } from 'src/app/shared/models/cart';
import { CartItem } from 'src/app/shared/models/cartitem';
import { Course } from 'src/app/shared/models/course';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart = new Cart();

  addToCart(course: Course):void{
    let cartItem = this.cart.items.find(item => item.course.id === course.id);
    if(cartItem){
      this.changeQuantity(course.id, cartItem.quantity + 1);
      return;
    }
    this.cart.items.push(new CartItem(course));
  }

  removeFromCart(foodId:number): void{
    this.cart.items =
    this.cart.items.filter(item => item.course.id != foodId);
  }

  changeQuantity(foodId:number, quantity:number){
    let cartItem = this.cart.items.find(item => item.course.id === foodId);
    if(!cartItem) return;
    cartItem.quantity = quantity;
  }

  getCart():Cart{
    return this.cart;
  }
}
