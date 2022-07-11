import { Component, OnInit } from '@angular/core';
import { ParcelsService } from 'src/app/services/parcels.service';
import { Parcel } from 'src/app/parcel';
@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements OnInit {
  parcels: Parcel[] = []
  constructor(private parcelService: ParcelsService) { }

  ngOnInit(): void {
    this.getParcels()
  }

  getParcels(){
    this.parcelService.getParcels().subscribe((response)=>{
      this.parcels = response
    })
  }



}
