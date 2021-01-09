import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MycomponentComponent } from './mycomponent/mycomponent.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactusComponent/contactus.component';
import { ErrorComponent } from "./Error/error.component";
import { RouterModule } from "@angular/router";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MycomponentComponent,
    AboutusComponent,
    ContactusComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,RouterModule.forRoot([
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"aboutus",component:AboutusComponent},
  {path:"contactus",component:ContactusComponent},
  {path:"**",component:ErrorComponent}
])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
