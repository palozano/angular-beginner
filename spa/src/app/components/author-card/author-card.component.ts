import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-author-card',
  templateUrl: './author-card.component.html',
  styles: []
})
export class AuthorCardComponent implements OnInit {

    @Input() author:any = {};
    @Input() index:number;

    @Output() authorSelected: EventEmitter<number>;

    constructor( private router:Router ) {
        this.authorSelected = new EventEmitter();
    }

    ngOnInit() {
    }

    seeAuthor(){
        // console.log(this.index);
        this.router.navigate( ['/author', this.index] );
        // this.authorSelected.emit( this.index );
    }

}
