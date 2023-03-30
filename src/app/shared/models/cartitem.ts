import { Course } from "./course";

export class CartItem{
    constructor(course:Course){
      this.course = course;
    }
    course:Course;
    quantity:number = 1;

    get price():number{
        return this.course.price * this.quantity;
    }
}
