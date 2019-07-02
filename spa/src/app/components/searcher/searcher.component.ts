import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthorsService } from '../../services/authors.service';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
})

export class SearcherComponent implements OnInit {
    authors:any = [];
    termino:string;

    constructor( private activatedRoute:ActivatedRoute,
                 private _authorsService:AuthorsService) {
    }

    ngOnInit() {
      this.activatedRoute.params.subscribe( params =>{
          this.termino = params['termino'];
          this.authors = this._authorsService.searchAuthors( params['termino'] );
          console.log( this.authors );
      });
    }

    }
