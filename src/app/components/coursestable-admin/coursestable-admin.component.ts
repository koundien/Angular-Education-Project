import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-coursestable-admin',
  templateUrl: './coursestable-admin.component.html',
  styleUrls: ['./coursestable-admin.component.css']
})
export class CoursestableAdminComponent implements OnInit {
  courses:any=[];
  constructor(private courService:CourseService,
    private router:Router) { }

  ngOnInit() {
    this.courService.getAllCourse().subscribe( (data)=>{
        
      this.courses=data.result
      
    })

  }
  goToEdit(id){
    this.router.navigate([`editcours/${id}`]);
  }
  
  delete(id){
    this.courService.deleteCourse(id).subscribe(
      (data)=>{
        console.log("here data after delete",data.message)
        this.router.navigate(["dashboardAdmin"])
      }
    )
  }
  display(id){
    this.router.navigate([`displaycours/${id}`]);
  }
}
