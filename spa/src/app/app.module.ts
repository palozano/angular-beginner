import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// import { RouterModule, Routes } from '@angular/router';

// Routes
import { APP_ROUTING } from './app.routes';

// Services
import { AuthorsService } from './services/authors.service';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { AuthorsComponent } from './components/authors/authors.component';
import { AuthorComponent } from './components/author/author.component';
import { SearcherComponent } from './components/searcher/searcher.component';
import { AuthorCardComponent } from './components/author-card/author-card.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    AuthorsComponent,
    AuthorComponent,
    SearcherComponent,
    AuthorCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    APP_ROUTING,
  ],
  providers: [
      AuthorsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
