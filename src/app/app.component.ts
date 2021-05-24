import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // canSave = true;

  task = {
    title: 'review applications',
    assignee: {
      name: "sdsd"
    }
  }

  // courses;

  // loadCourses() {
  //   this.courses = [
  //     {id:1, name:'courses1'},
  //     {id:2, name:'courses3'},
  //     {id:3, name:'courses3'}
  
  
  //   ];
  // }

  // trackCourse(index,course) {
  //   return course? course.id : undefined;
  // }

  

  // viewMode = 'something';

  // post ={
  //   title: 'angular app',
  //   isFavorite: true
  // }

  // tweet = {
  //   body: 'this is the body of the tweet.',
  //   isLiked : true,
  //   likesCount : 100
  // }

  // onFavoriteChanged(eventArgs: {newValue:boolean}) {
  //   console.log("changed :" + eventArgs.newValue);  
  // }
}
  