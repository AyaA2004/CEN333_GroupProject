import { Component } from '@angular/core';
import { MContainerComponent } from "../m-framework/components/m-container/m-container.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PersistenceService } from '../m-framework/services/persistence.service';
import { CourseSchedule } from './data/courseScheduling';
import { MAhaComponent } from '../m-framework/components/m-aha/m-aha.component';
import { from } from 'rxjs';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, MContainerComponent, MAhaComponent],
  templateUrl: './feature2.component.html',
  styleUrl: './feature2.component.css'
})
export class AddComponent {
  title = 'University Course Scheduling';
  courseSchedule: CourseSchedule;

  
  constructor(public persistence: PersistenceService) {
    this.courseSchedule = new CourseSchedule("","",0,"",0,""); 
  }

  resetState(){
    this.courseSchedule = new CourseSchedule("","",0,"",0,"");
  }
  addSection(form: any, type:string){
    let courseSchedule: CourseSchedule = new CourseSchedule(
      this.courseSchedule.course,
      this.courseSchedule.instructor,
      this.courseSchedule.sectionNumber,
      this.courseSchedule.capacity,   
      this.courseSchedule.timeSlot,
      this.courseSchedule.campus

    );
    this.persistence.addCourse(courseSchedule, type);
    this.resetState();
    form.resetForm(); 
    
  }
  removeCourse(id: string, type: string) {
    this.persistence.removeCourse(id, type);
  }  
  get localListOfListOfCourseSchedule(){
    return this.persistence.getLocalList();
  }
  get remoteListOfCourseSchedule(){
    return this.persistence.getRemoteList();
  }
}