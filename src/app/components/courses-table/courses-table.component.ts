import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { connected } from 'process';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-courses-table',
  templateUrl: './courses-table.component.html',
  styleUrls: ['./courses-table.component.css']
})
export class CoursesTableComponent implements OnInit {
  courses:any=[];
 connectedUser=JSON.parse(localStorage.getItem("connectedUser"))


  constructor(private courService:CourseService,
    private router:Router) { }

  ngOnInit() {
    

    this.courService.getCoursByTeacherId(this.connectedUser._id).subscribe(
      (data)=>{
        
        this.courses=data.result
        
      }
      
    )
    
  }

  goToEdit(id){
    this.router.navigate([`editform/${id}`]);
  }
  
  delete(id){
    this.courService.deleteCourse(id).subscribe(
      (data)=>{
        console.log("here data after delete",data.message)
        this.router.navigate(["dashboardteacher"])
      }
    )
  }
}
