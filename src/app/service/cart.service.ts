
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartList = [];

  products = [
    {id:1, image:"Tomato", price:100, url:'https://i.insider.com/5f988ad469331a0011bc597d'} ,
    {id:2, image:'BBQ', price:120, url:'https://media.workandmoney.com/ef/16/ef168f93358c4d4fb38ccf8586f1897e.jpeg'},
    {id:3, image:'Chicken', price:150, url:'https://i.insider.com/5b4631bf20e3a842008b45b0?width=1100&format=jpeg&auto=webp'},
    {id:4, image:'Beef', price:125, url:'https://www.abeautifulplate.com/wp-content/uploads/2015/08/the-best-homemade-margherita-pizza-1-4-480x480.jpg'},
    {id:5, image:'Something meaty', price:175 , url:'https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Pizza-from-Scratch_EXPS_FT20_8621_F_0505_1_home.jpg'},
    {id:6, image:'vegetable pizza',price: 180 , url:'https://media4.s-nbcnews.com/i/newscms/2020_09/3246761/plain_pizza_f431dcc55520ce41f835a97a5383f171.jpg'},
    {id:7, image:'Green pizza', price:155 , url:'https://media-cdn.tripadvisor.com/media/photo-s/09/07/bb/36/pizza-hut.jpg'},
    {id:8, image:"BBQ", price:122, url:'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/rainbow-pizzas-8230947.jpg?quality=90&resize=768,574'} ,
    {id:2, image:'green pizza', price:144, url:'https://media.workandmoney.com/ef/16/ef168f93358c4d4fb38ccf8586f1897e.jpeg'},
    {id:9, image:'Red wine', price:220, url:'https://c4.wallpaperflare.com/wallpaper/759/102/469/food-wine-hd-wallpaper-preview.jpg'},
    {id:10, image:'Original', price:213, url:'https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/10/17/11/wine-cheese-food-istock-scorpp.jpg'},
    {id:11, image:'Black wine', price:250, url:'https://www.sonomacounty.com/sites/default/files/styles/video_thumbnail_image/public/2020-03/tasting_rooms_wineries_gary_farrell_sonoma_county_884x663_0.jpg?itok=vPjBxtDv'},
    {id:12, image:'Pineaaple wine', price:255, url:'https://www.sonomacounty.com/sites/default/files/styles/profile_photo_full/public/listing_images/profile/3/IMG_03370-73749d505056a36_73749fef-5056-a36a-07f971f1983623a3.jpg?itok=TpCiIWxu'},
    {id:13, image:'Apple wine',price: 280, url:'https://www.benziger.com/wp-content/uploads/2020/04/Homepage-_-Shop-Wines-Header-comp.jpg'},
    {id:14, image:'Pear wine', price:244, url:'https://1bqu1qjqw3y3g50yf4cszxnd-wpengine.netdna-ssl.com/wp-content/uploads/2019/10/S5E3Wine3-1024x576.png'},
    {id:15, image:"orange wine", price:140, url:'https://www.foleyfoodandwinesociety.com/assets/client/images/Articles/sebastiani%20trio%20rsz.jpg'} ,
    {id:16, image:'Original', price:200, url:'https://www.foleyfoodandwinesociety.com/assets/client/images/Wineries/Sebastiani/Sebastiani-Beauty-Shot-02132018.jpg'},
    {id:17, image:'chilli', price:213, url:'https://wineindustryadvisor.com/wp-content/uploads/2019/10/Harvest-Fair-Sweepstakes-Winners-2019.jpg'},
    {id:19, image:'Tomato', price:85 , url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS76OCz0nqilSyDU4vL5KS0i26tFyJh4mxxAg&usqp=CAU'},
    {id:20, image:'Hot',price: 75 , url:'https://tasteandsee.com/wp-content/uploads/2017/06/Easy-Pimento-Cheese-and-Bacon-Burger-EL-burger-perfect.jpg'},
    {id:21, image:'Double', price:65 , url:'https://www.tripsavvy.com/thmb/KgoAd1ljKfv5GJxKFF1V-d30auQ=/2584x1723/filters:no_upscale():max_bytes(150000):strip_icc()/HFPH-Burger-3.31.15-56a04f465f9b58eba4afd89a.jpg'},
    {id:22, image:"Saucy", price:45, url:'https://bigseventravel.com/wp-content/uploads/2019/11/flip-1920x1280.jpg'} ,
    {id:23, image:'Mild', price:35, url:'https://media.timeout.com/images/105187765/630/472/image.jpg'},
    {id:24, image:'original', price:85, url:'https://i.guim.co.uk/img/media/0c48fbd49d25f94a6bbcc04e1234cf9fe64ea198/35_633_6967_4180/master/6967.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=51c1793119a9aad5e6f3f02ae0d60950'},
    {id:25, image:'Mini ', price:25, url:'https://hg1ht-php.websale.biz/genussmagazin/wp-content/uploads/2017/09/r444_Indonesischer-Kokos-Burger_04-1200x900.jpg'},
    {id:21, image:'Hot', price:30, url:'https://www.tripsavvy.com/thmb/KgoAd1ljKfv5GJxKFF1V-d30auQ=/2584x1723/filters:no_upscale():max_bytes(150000):strip_icc()/HFPH-Burger-3.31.15-56a04f465f9b58eba4afd89a.jpg'},
    {id:26, image:'Mild', price:20, url:'https://images.immediate.co.uk/production/volatile/sites/2/2017/06/Butchies-2-1.jpg?quality=45&crop=23px,292px,3794px,2528px&resize=620,413'},
    
    
  ]
  constructor() { }


  addToCart(product){
    this.cartList.push(product);
   }
 
   removeItem(product){
     var i = 0;
    while(i < this.cartList.length){
     if(this.cartList[i] === product){
       this.cartList.splice(i, 1);
     }else{
       ++i;
     }
   }
   return this.cartList;
  }
  getCart() {
   return this.cartList;
 }
 getProducts() {
   return this.products;
 }
 

} 
