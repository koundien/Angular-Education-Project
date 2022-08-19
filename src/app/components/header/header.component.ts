import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  connectedUser: any;
  role: string;
  test: any
  constructor() { }

  ngOnInit() {
    this.connectedUser = JSON.parse(localStorage.getItem("connectedUser"))
    if (this.connectedUser) {

      this.role = this.connectedUser.role
      this.test = 1
    } else {
      console.log("connectedUser", this.connectedUser)
      this.test = 0
    }


    console.log("here test", this.test);
    


  }

}
