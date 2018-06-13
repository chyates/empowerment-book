import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FaqComponent } from './faq/faq.component';
import { SubmitComponent } from './submit/submit.component';
import { SurveyComponent } from './survey/survey.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

@NgModule({

  declarations: [
    AppComponent,
    FaqComponent,
    SubmitComponent,
    SurveyComponent,
    ContactComponent,
    HomeComponent,
    AboutComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }