import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  option = { 
    slidesPerView: 1.5 ,
    centeredSlides: 1.5,
    loop: true,
    spaceBetween: 10,
   // autoplay:true,

  }
// //add to cart 
//   addPizza1(){
//    this.router.navigateByUrl('tabs/order');
//   }



//go to menu 
  allmenupizza(){
    this.router.navigateByUrl('allmenu')
  }

  allmenuwine(){
    this.router.navigateByUrl('allmenu')
  }
  allmenuburger(){
    this.router.navigateByUrl('allmenu')
  }
}
