import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm:FormGroup
  constructor( private formBuilder:FormBuilder,
    private userService:UserService,
    private router:Router) { }
    
  path= this.router.url;
  ngOnInit() {
    this.signupForm=this.formBuilder.group({
      fName:['',[Validators.required,Validators.minLength(3)]],
      lName:['',[Validators.minLength(5) , Validators.required]],
      email:['',[Validators.email,Validators.required]],
      pwd:['',[Validators.minLength(6),Validators.maxLength(12),Validators.required]],
      role:['teacher']

    })
    
  }
  
  signup(){
  this.userService.signup(this.signupForm.value).subscribe()    
  
  }
  
}
