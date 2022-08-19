import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  eventUrl:string="http://localhost:3000/events"

  constructor(private httpclient:HttpClient) { }
  addEvent(obj){
    return this.httpclient.post<{message:any}>(this.eventUrl,obj)
  }

  updateEvent(obj){
    return this.httpclient.put(this.eventUrl,obj);
  }

  getEventById(id){
    return this.httpclient.get(`${this.eventUrl}/${id}`)
  }

  getAllEvent(){
   return this.httpclient.get<{result:any}>(this.eventUrl)
  }

  deleteEvent(id){
    return this.httpclient.delete(`${this.eventUrl}/${id}`)
  }
}
