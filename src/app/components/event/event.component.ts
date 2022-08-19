import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
 
export class EventComponent implements OnInit {
  @Input() x : any
  Reservation:any={}
  constructor(private resService:ReservationService,
    private router:Router) { }

  ngOnInit() {
    
  }
  reservation(id){
    var connectedUser=JSON.parse(localStorage.getItem("connectedUser"))
    this.Reservation={
      idUser:connectedUser._id,
      idCourEvent:id,
      type:"event",
    }

   this.resService.addReservation(this.Reservation).subscribe((data)=>{
    console.log(data.message)
    this.router.navigate(['dashboardStudent'])
   })
  }
}
