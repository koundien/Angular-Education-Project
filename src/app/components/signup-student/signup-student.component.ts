import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup-student',
  templateUrl: './signup-student.component.html',
  styleUrls: ['./signup-student.component.css']
})
export class SignupStudentComponent implements OnInit {
  signupForm:FormGroup
  constructor( private formBuilder:FormBuilder,
    private userService:UserService,
    private router:Router) { }

  ngOnInit() {
    this.signupForm=this.formBuilder.group({
      fName:['',[Validators.required,Validators.minLength(3)]],
      lName:['',[Validators.minLength(5) , Validators.required]],
      email:['',[Validators.email,Validators.required]],
      pwd:['',[Validators.minLength(6),Validators.maxLength(12),Validators.required]],
      role:['student']

    })
  }
  signup(){
  this.userService.signup(this.signupForm.value).subscribe((data)=>{
    console.log("here data after subscribe",data.message)
    this.router.navigate(["login"])
  }) 
 }

}
