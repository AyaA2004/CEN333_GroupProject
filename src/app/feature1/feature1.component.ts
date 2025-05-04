import { Component } from '@angular/core';
import { MContainerComponent } from "../m-framework/components/m-container/m-container.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PersistenceService } from '../m-framework/services/persistence.service';
import { AbuDhabiGrid } from './Data/AbuDhabiGrid';
import { AlAinGrid} from './Data/AlAinGrid';
import { MAhaComponent } from '../m-framework/components/m-aha/m-aha.component';
import { from } from 'rxjs';
import { set } from 'firebase/database';
import { SLOT_DATA, Slot } from './Data/Slot';

@Component({
  selector: 'app-feature1',
  imports: [CommonModule, FormsModule, MContainerComponent, MAhaComponent],
  templateUrl: './feature1.component.html',
  styleUrl: './feature1.component.css'
})
export class Feature1Component {
  title = 'University Course Scheduling';
  abuDhabiGrid: AbuDhabiGrid;
  alAinGrid: AlAinGrid;
  successMessage: boolean = false;
  errorMessage: boolean = false;
  slots: Slot[] = SLOT_DATA; 

  constructor(public persistence: PersistenceService){
    this.abuDhabiGrid = new AbuDhabiGrid(0,"","","");
    this.alAinGrid = new AlAinGrid(0,"","","");
    this.successMessage = false;
    this.errorMessage = false;
  }

  resetState(){
    this.abuDhabiGrid = new AbuDhabiGrid(0,"","","");
    this.alAinGrid = new AlAinGrid(0,"","","");
  }

  addSection(form: any, type:string){
    let abuDhabiGrid: AbuDhabiGrid = new AbuDhabiGrid(
      this.abuDhabiGrid.slot,
      this.abuDhabiGrid.daypattern,
      this.abuDhabiGrid.time,
      this.abuDhabiGrid.coursecode,
    );

    let alAinGrid: AlAinGrid = new AlAinGrid(
      this.alAinGrid.slot,
      this.alAinGrid.daypattern,
      this.alAinGrid.time,
      this.alAinGrid.coursecode,
    );

    this.persistence.addSession(abuDhabiGrid, type);

    this.successMessage = true;
    this.errorMessage = false;
setTimeout(() => {
      this.successMessage = false;  
},3000);

    this.resetState();
    form.resetForm();
  }
  get localListOfListOfAbuDhabiGrid(){
    return this.persistence.getLocalList();
  }
  get remoteListOfAbuDhabiGird(){
    return this.persistence.getRemoteList();
  }

  get localListOfListOfAlAinGrid(){
    return this.persistence.getLocalList();
  }
  get remoteListOfAlAinGrid(){
    return this.persistence.getRemoteList();
  }
  
}
