import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-adminregister',
  templateUrl: './adminregister.component.html',
  styleUrls: ['./adminregister.component.css']
})
export class AdminregisterComponent implements OnInit {

  
  adminregister: any;

  constructor(public authService: AuthService, public router: Router) { }

  ngOnInit(): void {
    this.adminregister= {username:'',email:'',password:'', password2:''};
  }
  goLogin() {
    this.router.navigate(['/', 'login']);
  }
  registerAdmin(){
    this.authService.registerAdmin(this.adminregister).subscribe(
      response=> {
        alert(' Admin has been registered successfully!')
        this.goLogin()
      },
      error=> console.log (error)
    );
  }

}
