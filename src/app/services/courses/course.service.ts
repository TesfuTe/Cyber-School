import { Injectable } from '@angular/core';
import { Course } from '../../shared/models/course';
import { Tag } from '../../shared/models/tag';


@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }

  getCourseById(id: number): Course{
    return this.getAll().find(course => course.id == id)!;
  }

  getAllCoursesBySearchTerm(searchTerm:string) :Course[]{
    return  this.getAll().filter(course =>
      course.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }

  getAllTags(): Tag[] {
    return [
      { name: 'All', count: 12 },
      { name: 'Free', count: 2 },
      { name: 'Paid', count: 4 },
      { name: 'Basic', count: 1 },
      { name: 'Intermidate', count: 1 },
      { name: 'Advanced', count: 3 },
      { name: 'Elite', count: 1 },
    ];
  }

  getAllCoursesByTag(tag: string): Course[] {
    return tag == "All" ?
      this.getAll() :
      this.getAll().filter(course => course.tags?.includes(tag));
  }

  getAll():Course[]{
    return [
      {
        id: 1,
        name: 'Introduction to Cyber security',
        learningTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy','Germany'],
        stars: 4.5,
        imageUrl: 'assets/images/Courses/Cyber Security course 1.jpeg',
        tags: ['Free', 'Basic'],
      },
      {
        id: 2,
        name: 'Introduction to Ethical Hacking',
        price: 20,
        learningTime: '20-30',
        favorite: true,
        origins: ['persia', 'middle east', 'china'],
        stars: 4.7,
        imageUrl: 'assets/images/Courses/Cyber Security course 2.jpeg',
        tags: ['Intermidate', 'Free'],
      },
      {
        id: 3,
        name: 'Ethical Hacking Bootcamp 2023',
        price: 5,
        learningTime: '10-15',
        favorite: false,
        origins: ['germany', 'us'],
        stars: 3.5,
        imageUrl: 'assets/images/Courses/Cyber Security course 3.jpeg',
        tags: ['Advanced', 'Paid'],
      },
      {
        id: 4,
        name: 'Certified Ethical Hacking 2',
        price: 2,
        learningTime: '15-20',
        favorite: true,
        origins: ['belgium', 'france'],
        stars: 3.3,
        imageUrl: 'assets/images/Courses/Cyber Security course 4.png',
        tags: ['Elite', 'Paid'],
      },
      {
        id: 5,
        name: 'Advanced netwrok penetration testing',
        price: 11,
        learningTime: '40-50',
        favorite: false,
        origins: ['india', 'asia'],
        stars: 3.0,
        imageUrl: 'assets/images/Courses/Cyber Security course 5.jpeg',
        tags: ['Advanced', 'Paid'],
      },
      {
        id: 6,
        name: 'Web Application Security',
        price: 9,
        learningTime: '40-50',
        favorite: false,
        origins: ['italy'],
        stars: 4.0,
        imageUrl: 'assets/images/Courses/Cyber Security course 6.jpg',
        tags: ['Advanced', 'Paid'],
      }
    ]
  }
}
