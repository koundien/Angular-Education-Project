import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-editcoursecomponents',
  templateUrl: './editcoursecomponents.component.html',
  styleUrls: ['./editcoursecomponents.component.css']
})
export class EditcoursecomponentsComponent implements OnInit {
  editForm:FormGroup
  course:any={}
  id:any;
  
  constructor(private courService:CourseService,
    private activatedRoute:ActivatedRoute,
    private router:Router) { }
   
  ngOnInit() {
    this.id=this.activatedRoute.snapshot.paramMap.get("id");
    this.courService.getCourseById(this.id).subscribe((data)=>{
      
      this.course=data.result
      console.log(this.course)
    })
    
  }

  editCourse(){
    alert("edit clicked")
    this.courService.updateCourse(this.course).subscribe((data)=>{
      console.log(data.message)
      this.router.navigate(["dashboardAdmin"])
    })
  }
}


