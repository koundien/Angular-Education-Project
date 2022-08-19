import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-reservationtab',
  templateUrl: './reservationtab.component.html',
  styleUrls: ['./reservationtab.component.css']
})
export class ReservationtabComponent implements OnInit {
  connectedUser:any;
  res:any;
  tab:any=[];
  c:any
  constructor(private resService:ReservationService,
    private courService:CourseService) { }

  ngOnInit() {
    
    this.connectedUser=JSON.parse(localStorage.getItem("connectedUser"));
    this.resService.getReservationByConnectedUserId(this.connectedUser._id).subscribe((data)=>{
      console.log("here into data reservation",data.result);
      
      this.tab=data.result
       
     
    })
    console.log(this.c)
  }

}
