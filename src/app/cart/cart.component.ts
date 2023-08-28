import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
constructor(private router:Router){}
ToGrocery(){
  this.router.navigate(['/home/cart/grocery']);
}
ToFlipkart(){
  this.router.navigate(['/home/cart/flipkart']);
}
}
