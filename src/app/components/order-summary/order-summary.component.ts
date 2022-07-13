import { Component, OnInit } from '@angular/core';
import { ParcelsService } from 'src/app/services/parcels.service';
import { Parcel } from 'src/app/parcel';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements OnInit {
  changeForm! : FormGroup

  parcels: Parcel[] = []
  constructor(private parcelService: ParcelsService) { }

  ngOnInit(): void {
    this.getParcels();
    this.updateForm()
  }

  updateForm(){
    this.changeForm = new FormGroup({
      destination : new FormControl('', [Validators.required]),
    })
  }

  getParcels(){
    this.parcelService.getParcels().subscribe((response: any)=>{
      this.parcels = response
      console.log(response)
    })
  }

  changeDestination(parcel:any){ 
    if(this.changeForm.valid){
    this.parcelService.updateParcel(parcel).subscribe(
      response => {
       console.log(response)
      }
     )
    }
  }

  deleteParcel(parcel:any){
    this.parcelService.cancelParcel(parcel).subscribe(
      () => {
        this.parcels = this.parcels.filter((p) => p.name !== parcel.id)
        window.location.reload()
      }
      
    )
  }



}
