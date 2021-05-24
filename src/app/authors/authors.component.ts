import { Component, OnInit } from '@angular/core';
import { AuthorsService } from 'app/authors.service';

@Component({
  selector: 'authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  authors;
  constructor(authorService: AuthorsService) {
    this.authors = authorService.getAuthor();
   }

  ngOnInit() {
  }

}
