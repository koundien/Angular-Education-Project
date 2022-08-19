import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   users:any ={};
   loginForm:FormGroup;
   errorMsg:any;

  constructor(private userService:UserService ,
    private router:Router ) { }

  ngOnInit() {
  }
  login(){
    this.userService.login(this.users).subscribe(
      (data)=>{
        console.log("here data after login",data)
        if (data.message==1) {
          localStorage.setItem("connectedUser",JSON.stringify(data.result))
          this.router.navigate([""])
        } else {
          this.errorMsg="check email/pwd"
        }
        
      })

  }

}
