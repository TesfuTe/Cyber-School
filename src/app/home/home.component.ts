import { Component, OnInit } from '@angular/core';
import {CourseService} from '../services/courses/course.service';
import { Course } from '../shared/models/course';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  courses:Course[] = [];
  constructor(private  courseService:CourseService, private route: ActivatedRoute){}

  ngOnInit(): void{
    this.route.params.subscribe(params => {
      if (params.searchTerm)
        this.courses = this.courseService.getAllCoursesBySearchTerm(params.searchTerm);
      else if (params.tag)
        this.courses = this.courseService.getAllCoursesByTag(params.tag);
      else
        this.courses = this.courseService.getAll();
    })
  }
}
