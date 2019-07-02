import { Component, OnInit } from '@angular/core';
import { AuthorsService, Author } from '../../services/authors.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styles: []
})
export class AuthorsComponent implements OnInit {

    authors:Author[] = [];

    constructor( private _heroesService:AuthorsService,
                 private router:Router) {
    }

    ngOnInit() {
        this.authors = this._heroesService.getAuthors();
        console.log(this.authors);
    }

    seeAuthor( idx:number ){
        this.router.navigate( ['/author', idx] )
    }

}
