
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { AuthorsComponent } from './components/authors/authors.component';
import { AuthorComponent } from './components/author/author.component';
import { SearcherComponent } from './components/searcher/searcher.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'authors', component: AuthorsComponent },
    { path: 'search/:termino', component: SearcherComponent },
    { path: 'author/:id', component: AuthorComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});
