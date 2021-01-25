import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  constructor(private router: Router) { }

  allmenu(){
  this.router.navigateByUrl('allmenu')
  }
  
  
  ngOnInit() {


 
  }

}
