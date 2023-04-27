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
   coursedata:any[]=[];

   isNew:boolean=true;


  courseInfo=new FormGroup({
       id:new FormControl(),
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
     if(this.isNew==true)
     {
         this.courseservice.newcourse(this.courseInfo.value).subscribe(result=>{
           this.msg=result;
           this.view();
         })

     }
     else {
         this.courseservice.updatecourse(this.courseInfo.value).subscribe(result=>{
         this.msg=result;
           this.view();
       })

     }

     this.courseInfo.reset()

     this.isNew=true
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
      this.courseInfo.setValue({"id":course.id,"name":course.name,"fees":course.fees,
                                     "description":course.description,"discount":course.discount});

      this.isNew=false;
  }

  delete(course:any)
  {
    console.log(course);
      this.courseservice.deletecourse(course).subscribe(result=>{
      this.msg=result;
      this.view();
    })
  }


}
