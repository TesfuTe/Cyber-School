import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart/cart.service';
import { CourseService } from '../services/courses/course.service';
import { Course } from '../shared/models/course';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.css']
})
export class CoursePageComponent implements OnInit {

  course!: Course;
  constructor(private activatedRoute:ActivatedRoute,
    private courseService: CourseService,
    private cartService: CartService,
    private router: Router) {
    activatedRoute.params.subscribe((params) => {
      if(params.id)
      this.course = courseService.getCourseById(params.id);
    })

  }

  ngOnInit(): void {
  }

  addToCart(){
    this.cartService.addToCart(this.course);
    this.router.navigateByUrl('/cart-page');
  }

}
