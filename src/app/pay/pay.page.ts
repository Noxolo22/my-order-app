import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.page.html',
  styleUrls: ['./pay.page.scss'],
})
export class PayPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
goCredit(){
this.router.navigateByUrl('credit');
}
goCash(){
  this.router.navigateByUrl('address');
}
}
