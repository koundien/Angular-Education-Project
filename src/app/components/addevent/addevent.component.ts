import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-addevent',
  templateUrl: './addevent.component.html',
  styleUrls: ['./addevent.component.css']
})
export class AddeventComponent implements OnInit {
  event:any={};
  addForm=FormGroup;
  constructor(private eventService:EventService) { }

  ngOnInit() {
  }
add(){
  this.eventService.addEvent(this.event).subscribe()

  
}
}
