import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-allmenu',
  templateUrl: './allmenu.page.html',
  styleUrls: ['./allmenu.page.scss'],
})








export class AllmenuPage implements OnInit {

    cart = [];
    items = [];


  constructor(private cartService: CartService, private router: Router) { }
ngOnInit() {
    this.items = this.cartService.getProducts();
    this.cart = this.cartService.getCart();
  }

  //call this function (buttons)
  add(product){
    this.cartService.addToCart(product);
     console.log(this.cartService.getCart());
  }

  //icart iyekwi order 
  gotoOrder(){
      this.router.navigateByUrl('tabs/order');
  }
}




