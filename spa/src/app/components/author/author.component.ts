import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthorsService } from '../../services/authors.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
})
export class AuthorComponent implements OnInit {

    author:any = {};

    constructor( private activatedRoute: ActivatedRoute,
                 private _authorsService: AuthorsService) {

      this.activatedRoute.params.subscribe( params => {
          console.log( this.author );
          this.author = this._authorsService.getAuthor( params['id'] );
      });



    }

    ngOnInit() {
    }

}
