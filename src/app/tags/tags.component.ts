import { Component, Input, OnInit } from '@angular/core';
import {CourseService} from '../services/courses/course.service';

import {Tag} from '../shared/models/tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})

export class TagsComponent implements OnInit {
  @Input()
  coursePageTags?:string[];

  @Input()
  justifyContent:string = 'center';

  tags?:Tag[];

  constructor(private courseService:CourseService) { }

  ngOnInit(): void {
    if(!this.coursePageTags)
      this.tags = this.courseService.getAllTags();
  }
}
