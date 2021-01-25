
import { Router } from '@angular/router';
import { CartService } from './../service/cart.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {
  selectedItems = [];
 
  total = 0;
 
  constructor(private cartService: CartService, private router: Router) { }
  
  //checkout iye kwi registration
  // goreg(){
  //   this.router.navigateByUrl('tabs/account');
  //  }

   
  ngOnInit() {
    
    let items = this.cartService.getCart();
    let selected = {};
    for (let obj of items) {
      if (selected[obj.id]) {
        selected[obj.id].count++;
      } else {
        selected[obj.id] = {...obj, count: 1};
      }
    }
    this.selectedItems = Object.keys(selected).map(key => selected[key])
    this.total = this.selectedItems.reduce((a, b) => a + (b.count * b.price), 0);
  }

  goPay(){
     this.router.navigateByUrl('pay');
  }
  remove(product){
    this.selectedItems = this.cartService.getCart();
    this.cartService.removeItem(product);
  //  this.total =this.total- this.Item
  }

}