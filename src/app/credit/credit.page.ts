import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-credit',
  templateUrl: './credit.page.html',
  styleUrls: ['./credit.page.scss'],
})
export class CreditPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  goaddress(){
    this.router.navigateByUrl('address');
  }
  }

