import { AfterViewInit, Component, OnInit } from '@angular/core';
// import { Loader } from '@googlemaps/js-api-loader';
// import { styles } from './mapstyles';
 
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit{

  // title = 'google-maps';
  
 
  // private map!: google.maps.Map
 
  // ngOnInit(): void {
  //   let loader = new Loader({
  //     apiKey: 'AIzaSyCkJzNtymIcuSjLXx3YcQJfGmuRs3KSCWU',
  //   });
 
  //   loader.load().then(() => {
  //     console.log('loaded gmaps')
 
  //     const location = { lat: 51.233334, lng: 6.783333 }
 
  //     this.map = new google.maps.Map(document.getElementById("map")as HTMLElement, {
  //       center: location,
  //       zoom: 6,
  //       // styles: styles
  //     })
 
  //     const marker = new google.maps.Marker({
  //       position: location,
  //       map: this.map,
  //     });
  //   })
  // }
  private map: any;

  constructor() { }

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void{
    this.map = L.map('map').setView([-1.286389, 36.817222], 15);

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap'
    })
    tiles.addTo(this.map)
  }
}
