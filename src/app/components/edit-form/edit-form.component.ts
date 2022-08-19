import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {
  course:any={};
  id:any;
  editForm:FormGroup;
  constructor(private courService:CourseService,
    private activatedRoute:ActivatedRoute,
    private router:Router ) { }

  ngOnInit() {
    this.id=this.activatedRoute.snapshot.paramMap.get('id')
    this.courService.getCourseById(this.id).subscribe(
      (data)=>{
        this.course=data.result;
        console.log("here object",data.result)
      }
    )
  }

  editCourse(){
    this.courService.updateCourse(this.course).subscribe(
      (data)=>{
        console.log("here data after update",data.message)
        this.router.navigate(["dashboardteacher"])
      }
    );
  }
}
