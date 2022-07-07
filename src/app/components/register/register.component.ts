import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [AuthService]
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService) { }
  register: any;

  constructor(public authService: AuthService, public router: Router) { }

  ngOnInit(): void {
    this.register= {username:'',email:'',password:'', password2:''};
  }
  goLogin() {
    this.router.navigate(['/', 'login']);
  }
  registerUser(){
    this.authService.registerUser(this.register).subscribe(
      response=> {
        alert('User has been registered successfully!')
        this.goLogin()
      },
      error=> console.log (error)
    );
  }

}
