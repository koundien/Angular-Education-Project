import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  resUrl:string="http://localhost:3000/reservations"
  constructor(private HttpClient:HttpClient) { }

  addReservation(obj){
    return this.HttpClient.post<{message:any}>(this.resUrl,obj)
  }
  updateReservation(obj){
    return this.HttpClient.put<{message:any}>(this.resUrl,obj);
  }

  getReservationById(id){
    return this.HttpClient.get<{result:any}>(`${this.resUrl}/${id}`)
  }

  getAllReservation(){
   return this.HttpClient.get<{result:any}>(this.resUrl)
  }

  deleteReservation(id){
    return this.HttpClient.delete<{message:any}>(`${this.resUrl}/${id}`)
  }
  // getReservationByConnectedUserId(id){
  //   return this.HttpClient.get<{result:any}>(`${this.resUrl}/tid/${id}`)
  // }}

  getReservationByConnectedUserId(id){
    return this.HttpClient.get<{result:any}>(`${this.resUrl}/Test_populate/${id}`)
  }}
  
