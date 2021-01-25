import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
declare var mapboxgl;
@Component({
  selector: 'app-address',
  templateUrl: './address.page.html',
  styleUrls: ['./address.page.scss'],
})
export class AddressPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
//      mapboxgl.accessToken = 'pk.eyJ1Ijoibm94b2xvMjIiLCJhIjoiY2tobG9lOGxqMDduNTMxcXFmZTllcDljMCJ9.Kr-a1OxyAVaoC-U371MzOA';
//  var map = new mapboxgl.Map({
//  container: 'map',
//  style: 'mapbox://styles/mapbox/streets-v11'
// });
//  map.addControl(new mapboxgl.NavigationControl());





 mapboxgl.accessToken = 'pk.eyJ1Ijoibm94b2xvMjIiLCJhIjoiY2tobG9lOGxqMDduNTMxcXFmZTllcDljMCJ9.Kr-a1OxyAVaoC-U371MzOA';
     var map = new mapboxgl.Map({
         container: 'map',
         style: 'mapbox://styles/mapbox/streets-v11',
        //  center: [-79.4512, 43.6568],
         zoom: 100
    });

    //  map.addControl(
    //     new mapboxgl.MapboxGeocoder({
    //         accessToken: mapboxgl.accessToken,
    //         mapboxgl: mapboxgl
    //      })
   



map.addControl(
  new mapboxgl.GeolocateControl({
  positionOptions: {
  enableHighAccuracy: true
  },
  trackUserLocation: true
  })
  );
  }
  

  gotoDone(){
    this.router.navigateByUrl('done');
}

  

}
