import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent implements OnInit {
  addForm:FormGroup
  teacherId:any;
  connectedUser:any

  constructor(private courService:CourseService,
    private formBuilder:FormBuilder,
    private router:Router) { }

  ngOnInit() {
    this.connectedUser=JSON.parse(localStorage.getItem('connectedUser'))
    this.teacherId=this.connectedUser._id
    this.addForm=this.formBuilder.group({
      cName:['',[Validators.required,Validators.minLength(3)]],
      cPrice:['',[Validators.minLength(5) , Validators.required]],
      cDesc:['',[Validators.email,Validators.required]],
      cNbre:['',[Validators.minLength(6),Validators.maxLength(12),Validators.required]],
      teacherId:[`${this.teacherId}`]

    })
  }

  add(){
    console.log('here course',this.addForm.value)
    this.courService.addCourse(this.addForm.value).subscribe(
      (data)=>{
        console.log(data.message)
        this.router.navigate(["dashboardteacher"])
      }
    );
      

  }
  

}
