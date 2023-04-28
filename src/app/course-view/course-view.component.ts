import { Component } from '@angular/core';
import {CourseService} from "../course.service";

@Component({
  selector: 'app-course-view',
  templateUrl: './course-view.component.html',
  styleUrls: ['./course-view.component.css']
})
export class CourseViewComponent {

  msg:string=""
  coursedata:any[]=[];

  constructor(public courseservice:CourseService) {
      this.view();
  }

  view()
  {
    this.courseservice.viewcourse().subscribe(result=>{
      console.log(result);
      this.coursedata=result;
    })
  }

  edit(course:any)
  {


  }

  delete(course:any)
  {
    console.log(course);

  }


}
