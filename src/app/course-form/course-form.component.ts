import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent  {

  coursesCategory = [
    {id:1, name:"Physics"}
    , {id:2, name:"Math"}
    ,{id:3, name:"CS"}
  ]

  log(x) {
    console.log(x);
    
  }
 

}
