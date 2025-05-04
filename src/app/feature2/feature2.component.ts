import { Component } from '@angular/core';
import { MContainerComponent } from "../m-framework/components/m-container/m-container.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PersistenceService } from '../m-framework/services/persistence.service';
import { environment } from '../environments/environment';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue, remove, set } from 'firebase/database';
import { CourseSchedule } from './data/courseScheduling';
import { MAhaComponent } from '../m-framework/components/m-aha/m-aha.component';
import { MTableComponent } from '../m-framework/components/m-table/m-table.component';
import { from } from 'rxjs';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, MContainerComponent, MAhaComponent, MTableComponent],
  templateUrl: './feature2.component.html',
  styleUrl: './feature2.component.css'
})
export class AddSectionComponent {
  title = 'University Course Scheduling';
  courseSchedule: CourseSchedule;
  successMessage: boolean= false;
  errorMessage: boolean= false;
  
  constructor(public persistence: PersistenceService) {
    this.courseSchedule = new CourseSchedule("","",0,"",0,""); 
  }

  resetState(){
    this.courseSchedule = new CourseSchedule("","",0,"",0,"");
  }
  add(form: any, type:string){
    let courseSchedule: CourseSchedule = new CourseSchedule(
      this.courseSchedule.course,
      this.courseSchedule.instructor,
      this.courseSchedule.sectionNumber,
      this.courseSchedule.capacity,   
      this.courseSchedule.timeSlot,
      this.courseSchedule.campus
);

    this.persistence.add(courseSchedule, type);

    this.successMessage = true;
    this.errorMessage = false;
setTimeout(()=> {
      this.successMessage = false;
    },3000);

    this.resetState();
    form.resetForm(); 
    
  }


  remove(course: CourseSchedule, type: string) {
    this.persistence.remove(course.sectionNumber.toString(), type);
} 
  get localListOfListOfCourseSchedule(){
    return this.persistence.getLocalList();
  }
  get remoteListOfCourseSchedule(){
    return this.persistence.getRemoteList();
  }
}