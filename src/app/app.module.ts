import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD:src/app/app.module.ts
import { PlaylistComponent } from './playlist/playlist.component';
import { ArtistComponent } from './artist/artist.component';
=======
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { GenreComponent } from './genre/genre.component';
>>>>>>> main:crowUI/src/app/app.module.ts

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD:src/app/app.module.ts
    PlaylistComponent,
    ArtistComponent
=======
    WelcomeComponent,
    AboutComponent,
    MenuComponent,
    LoginComponent,
    SignUpComponent,
    HomeComponent,
    GenreComponent
>>>>>>> main:crowUI/src/app/app.module.ts
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
