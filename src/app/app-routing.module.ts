import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CourseComponent} from "./course/course.component";
import {CourseViewComponent} from "./course-view/course-view.component";

const routes: Routes = [
  {path:"new",component:CourseComponent},
  {path:"view",component:CourseViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
