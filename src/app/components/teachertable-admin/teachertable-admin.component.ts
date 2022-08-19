import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-teachertable-admin',
  templateUrl: './teachertable-admin.component.html',
  styleUrls: ['./teachertable-admin.component.css']
})
export class TeachertableAdminComponent implements OnInit {
  teachers:any=[];
  constructor(private userService:UserService) { }

  ngOnInit() {
    this.userService.getAllTeachers().subscribe((data)=>{
      this.teachers=data.result
    })
  }

}
