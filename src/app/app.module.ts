import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { CourseViewComponent } from './course-view/course-view.component';
import {ButtonModule} from "primeng/button";
import {TableModule} from "primeng/table";
import {MenubarComponent} from "./menubar/menubar.component";
import {MenubarModule} from "primeng/menubar";
import {InputNumberModule} from "primeng/inputnumber";
import {InputTextModule} from "primeng/inputtext";
import {ToastModule} from "primeng/toast";
import {MessageModule} from "primeng/message";

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CourseViewComponent,
    MenubarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ButtonModule,
    TableModule,
    MenubarModule,
    InputNumberModule,
    InputTextModule,
    ToastModule,
    MessageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
