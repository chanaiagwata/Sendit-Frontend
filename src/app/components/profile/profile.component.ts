import { Component, OnInit } from '@angular/core';
import { ProfilesService } from 'src/app/services/profile.service';




@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [ProfilesService]

})
export class ProfileComponent implements OnInit {
  users = [{id:1},{user:''},{location:''}, {date_created:''}];
  selectedProfile: any;
  constructor(private api: ProfilesService) {
    this.getClientsProfiles();
    this.selectedProfile ={id:'', user:'', location:'', date_created:'', }
  }
  getClientsProfiles=() =>{
    this.api.getAllClient().subscribe(
      data => {
        this.users =data
      },
      error => {
        console.log(error)
      }
    )
  }
  clientClicked = (user:any)=>{
    this.api.getSingleClient(user.id).subscribe(
      data => {
        this.selectedProfile = data;
      },
      error => {
        console.log(error)
      }
    )
  }
  updateProfile =() =>{
    this.api. updateClient(this.selectedProfile).subscribe(
      data => {
        this.getClientsProfiles();
          alert("profile updated successfully")

        alert("profile updated successfully")
      },
      error => {
        console.log(error)
        alert("profile update failed")
      }
    )
  }

  ngOnInit(): void {
  }
//   profiles = [{id:1},{fullname:'testname'},{bio:'bio'}, {organisation:'organisation'},
//   {location:'location'}, {profile_pic:'https://res.cloudinary.com/ireporter2022/image/upload/v1656953718/crime5_r8mbnm.jpg'}];
// selectedProfile: any;

// constructor(private api: ProfilesService) {
//   this.getClientsProfiles();
//   this.selectedProfile ={id:-1, fullname:'', bio:'', location:'', }
// }
// getClientsProfiles=() =>{
//   this.api.getAllClient().subscribe(
//     data => {
//       this.profiles =data
//     },
//     error => {
//       console.log(error)
//     }
//   )
// }

// clientClicked = (client:any)=>{
//   this.api.getSingleClient(client.id).subscribe(
//     data => {
//       this.selectedProfile = data;

//     },
//     error => {
//       console.log(error)
//     }
//   )
// }


// updateProfile =() =>{
//   this.api.updateClient(this.selectedProfile).subscribe(
//     data => {
//       this.getClientsProfiles();

//     },
//     error => {
//       console.log(error)
//     }
//   )
// }
// createProfile =() =>{
//   this.api.createClient(this.selectedProfile).subscribe(
//     data => {
//       this.getClientsProfiles();

//     },
//     error => {
//       console.log(error)
//     }
//   )
// }

// deleteProfile =() =>{
//   this.api.deleteClient(this.selectedProfile.id).subscribe(
//     data => {
//       this.getClientsProfiles();

//     },
//     error => {
//       console.log(error)
//     }
//   )
// }


// ngOnInit(): void {

// }


}
