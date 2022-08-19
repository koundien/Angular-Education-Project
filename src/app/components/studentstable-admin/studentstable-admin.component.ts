import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-studentstable-admin',
  templateUrl: './studentstable-admin.component.html',
  styleUrls: ['./studentstable-admin.component.css']
})
export class StudentstableAdminComponent implements OnInit {
  students:any=[];
  constructor(private userService:UserService) { }

  ngOnInit() {
    this.userService.getAllStudents().subscribe((data)=>{
      this.students =data.result
    })
  }

}
