import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userUrl:string="http://localhost:3000/users"

  constructor(private HttpClient:HttpClient) { }

  signup(obj){
    return this.HttpClient.post<{message:any}>(this.userUrl+"/signup",obj);
  }

  login(obj){
    return this.HttpClient.post<{result:any,message:any }>(this.userUrl+"/login",obj);
  }

  updateUser(obj){
    return this.HttpClient.put(this.userUrl,obj);
  }

  getUserById(id){
    return this.HttpClient.get<{result:any}>(`${this.userUrl}/${id}`)
  }

  getAllUser(){
   return this.HttpClient.get<{result:any}>(this.userUrl)
  }
  getAllStudents(){
    return this.HttpClient.get<{result:any}>(this.userUrl+"/students")
   }
   getAllTeachers(){
    return this.HttpClient.get<{result:any}>(this.userUrl+"/teachers")
   }

  
  deleteUser(id){
    return this.HttpClient.delete(`${this.userUrl}/${id}`)
  }
  

}
