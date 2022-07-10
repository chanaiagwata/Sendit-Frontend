import { Component, OnInit } from '@angular/core';
import { PostParcel } from 'src/app/parcel';
import { ParcelsService } from 'src/app/services/parcels.service';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

  name!: string
  description!: string
  weight!: number
  destination!: string
  photo! : string

  parcels: PostParcel[] = []
  constructor(private parcelService: ParcelsService) { }

  ngOnInit(): void {
    
  }

  sendParcel(){
    const newParcel = {
      name : this.name,
      description: this.description,
      weight: this.weight,
      destination: this.destination,
      photo: this.photo
      }   

      this.parcelService.addParcel(newParcel).subscribe((newParcel) => {
        console.log(newParcel)
      })
    }
}

  

  


