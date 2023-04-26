import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(public http:HttpClient) { }

  newcourse(course:any):Observable<any>{
    return this.http.post("http://localhost:9090/course",course,{responseType:'text'})
  }


  viewcourse():Observable<any>{
      return this.http.get<any>("http://localhost:9090/course")
  }


}
