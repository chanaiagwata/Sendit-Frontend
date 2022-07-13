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
<<<<<<< HEAD
    this.parcelService.updateParcel(this.changeForm.value).subscribe(
      result => {
       console.log(result)
=======
    this.parcelService.updateParcel(parcel).subscribe(

      response => {
       console.log(response)
>>>>>>> 410f48bbac1b9340d6868247d856f2d7417f8e72
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
