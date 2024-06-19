
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userservice/user.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit() {
      this.signupForm = this.formBuilder.group({
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(6)]],
          confirmpassword:['', [Validators.required, Validators.minLength(6)]]
      } );
  }

  get signupControll() { return this.signupForm.controls; }

  handleSignup()
  {
    console.log(this.signupForm.controls);
    const{firstName,lastName,email,password}=this.signupForm.value;
    this.userService.signinCall({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password
    }).subscribe((res)=>console.log(res),
    (err)=>console.log(err))
  }

}
