import { Component } from '@angular/core';
import {CourseService} from "../course.service";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-course-view',
  templateUrl: './course-view.component.html',
  styleUrls: ['./course-view.component.css'],
  providers: [MessageService]
})
export class CourseViewComponent {

  msg:string=""
  coursedata:any[]=[];

  constructor(public courseservice:CourseService,private messageService: MessageService) {
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
    this.courseservice.deletecourse(course).subscribe(result =>{

      // this.messageService.add({ severity: 'error', summary: 'Error', detail: 'record is deleted..' });


      this.view();
      this.showError();
    })

    console.log(course);

  }
  showError()
  {
    this.messageService.add({severity: 'error', summary: 'Error', detail: 'Message DELETED'});
  }


}
