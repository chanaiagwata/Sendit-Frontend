import { Component, OnInit } from '@angular/core';
import { ParcelsService } from 'src/app/services/parcels.service';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {
  parcels!:any ;

  constructor(private parcelService: ParcelsService) { }

  ngOnInit(): void {
    this.allParcels()
  }

  allParcels(){
    this.parcelService.getParcels(this.parcels).subscribe(
      response => {
        response.data = this.parcels
        console.log(response.data)
      },
      error => {
        alert('error')
      }
    )
    }

  

}
