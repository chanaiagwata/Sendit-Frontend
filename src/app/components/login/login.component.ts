import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formGroup!: FormGroup;

  constructor(private authService: AuthService, public router: Router) { }

  ngOnInit(): void {
    this.initForm()
  }

  initForm(){
    this.formGroup = new FormGroup({
      email : new FormControl('', [Validators.required]),
      password : new FormControl('', [Validators.required]),
    })
  }
  goHome() {
    this.router.navigate(['/', 'home']);
  }

  loginProcess(){
    if(this.formGroup.valid){
      this.authService.login(this.formGroup.value).subscribe(
        response => {
          alert('success')
          this.goHome()
        },
        error => {
          alert('error')
        }
      )
    }
  }

}
