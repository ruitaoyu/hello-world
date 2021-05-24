import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent {

  isExpended:boolean;

  @Input('title') title:string;

  toggle() {
    this.isExpended = !this.isExpended;
    
  }
}
