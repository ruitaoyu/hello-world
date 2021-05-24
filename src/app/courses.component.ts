import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    template: `
        {{title | uppercase}}
    
    `
})
 
export class CoursesComponent{
    title = "courses component";
    // // courses;
    // imgUrl = "https://i5.walmartimages.com/asr/1fc7a378-dc77-4163-b0f4-3f558d3a029c.476408bd807cab927b99e2f7b292a525.png?odnWidth=1000&odnHeight=1000&odnBg=ffffff";

    // _t;

    // onKeyup() {
    //     console.log(this._t);    
    // }

    // constructor(service : CoursesService) {
    //     this._t = "";
    // }
}