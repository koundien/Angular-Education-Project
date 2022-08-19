import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
courseUrl:string="http://localhost:3000/courses"
  constructor(private httpclient:HttpClient) { }

  addCourse(obj){
    return this.httpclient.post<{message:any}>(this.courseUrl,obj)
  }

  updateCourse(obj){
    return this.httpclient.put<{message:any}>(this.courseUrl,obj);
  }

  getCourseById(id){
    return this.httpclient.get<{result:any}>(`${this.courseUrl}/${id}`)
  }

  getAllCourse(){
   return this.httpclient.get<{result:any}>(this.courseUrl)
  }

  deleteCourse(id){
    return this.httpclient.delete<{message:any}>(`${this.courseUrl}/${id}`)
  }
  getCoursByTeacherId(id){
    return this.httpclient.get<{result:any}>(`${this.courseUrl}/tid/${id}`)
  }
}
