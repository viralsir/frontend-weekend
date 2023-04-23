import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CourseService} from "../course.service";

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
   msg:string=""
  courseInfo=new FormGroup({
       name:new FormControl(),
       description:new FormControl(),
       fees : new FormControl(),
       discount:new FormControl()

  })

  constructor(public courseservice:CourseService) {
  }

  save()
  {
     console.log(this.courseInfo.value);
     this.courseservice.newcourse(this.courseInfo.value).subscribe(result=>{
       this.msg=result;
     })
  }


}