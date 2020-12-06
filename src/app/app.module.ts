import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { ArtistComponent } from './artist/artist.component';
import { DiscussionComponent } from './discussion/discussion.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { GenreComponent } from './genre/genre.component';
import { AlbumComponent } from './album/album.component';
import { TopBarComponent } from './top-bar/top-bar.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from './token-interceptor.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PlaylistComponent,
    ArtistComponent,
    DiscussionComponent,
    WelcomeComponent,
    AboutComponent,
    MenuComponent,
    LoginComponent,
    SignUpComponent,
    HomeComponent,
    GenreComponent,
    AlbumComponent,
    TopBarComponent
  ],
  imports: [
    BrowserModule,
	AppRoutingModule,
  HttpClientModule,
  ReactiveFormsModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
