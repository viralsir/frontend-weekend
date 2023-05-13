import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CourseService} from "../course.service";

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent  implements OnInit{
   msg:string=""
   coursedata:any[]=[];


  public courseInfo=new FormGroup({
       id:new FormControl(),
       name:new FormControl(),
       description:new FormControl(),
       fees : new FormControl(),
       discount:new FormControl()

  })

  constructor(public courseservice:CourseService) {
    //      this.courseservice.course_form=this.courseInfo;
  }
  ngOnInit()
  {
    if(!this.courseservice.isNew) {
      this.courseInfo.setValue({
        "id": this.courseservice.course.id,
        "name": this.courseservice.course.name,
        "fees": this.courseservice.course.fees,
        "description": this.courseservice.course.description,
        "discount": this.courseservice.course.discount
      });
    }
  }

  save()
  {
     console.log(this.courseInfo.value);
     if(this.courseservice.isNew==true)
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

     this.courseservice.isNew=true
  }

  view()
  {
     this.courseservice.viewcourse().subscribe(result=>{
        console.log(result);
        this.coursedata=result;
     })
  }

  edit()
  {

      this.courseservice.isNew=false;
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
