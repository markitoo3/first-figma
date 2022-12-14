import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { MainPageGalleryComponent } from './components/main-page-gallery/main-page-gallery.component';
import { MainPageCardsComponent } from './components/main-page-cards/main-page-cards.component';
import { MainPageFooterComponent } from './components/main-page-footer/main-page-footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonPrimaryComponent } from './components/button-primary/button-primary.component';

import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    LoginFormComponent,
    MainPageComponent,
    MainPageGalleryComponent,
    MainPageCardsComponent,
    MainPageFooterComponent,
    ButtonPrimaryComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
