import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-courseslist',
  templateUrl: './courseslist.component.html',
  styleUrls: ['./courseslist.component.css']
})
export class CourseslistComponent implements OnInit {
  courses:any=[];
  constructor(private courService:CourseService) { }

  ngOnInit() {
    this.courService.getAllCourse().subscribe(
      (data)=>{
        console.log("here array ",data.result)
        this.courses=data.result
      }
    )
  }

}
