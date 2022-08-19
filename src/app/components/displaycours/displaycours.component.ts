import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-displaycours',
  templateUrl: './displaycours.component.html',
  styleUrls: ['./displaycours.component.css']
})
export class DisplaycoursComponent implements OnInit {
  id: any;
  cour: any = {}
  constructor(private activatedRoute: ActivatedRoute,
    private courService: CourseService) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id")
    this.courService.getCourseById(this.id).subscribe((data) => {
      this.cour = data.result;
    })
  }

}
