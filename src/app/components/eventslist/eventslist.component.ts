import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-eventslist',
  templateUrl: './eventslist.component.html',
  styleUrls: ['./eventslist.component.css']
})
export class EventslistComponent implements OnInit {
  eventTab:any=[];
  constructor( private event:EventService) { }

  ngOnInit() {
    this.event.getAllEvent().subscribe((data)=>{
      this.eventTab=data.result
    })
  }

}
