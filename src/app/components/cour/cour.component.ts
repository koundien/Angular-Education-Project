import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReservationService } from 'src/app/services/reservation.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-cour',
  templateUrl: './cour.component.html',
  styleUrls: ['./cour.component.css']
})

export class CourComponent implements OnInit {
  @ Input()x:any
  name:string;
  Reservation:any={}
 
  constructor(private userService:UserService , 
    private resService:ReservationService,
    private router:Router) { }

  ngOnInit() {
    this.userService.getUserById(this.x.teacherId).subscribe((data)=>{
      this.name=data.result.fName
    })
  }
  reservation(id){
    var connectedUser=JSON.parse(localStorage.getItem("connectedUser"))
    this.Reservation={
      idUser:connectedUser._id,
      idCourEvent:id,
      type:"cour",
    }

   this.resService.addReservation(this.Reservation).subscribe((data)=>{
    console.log(data.message)
    this.router.navigate(['dashboardStudent'])
   })
  }
}
