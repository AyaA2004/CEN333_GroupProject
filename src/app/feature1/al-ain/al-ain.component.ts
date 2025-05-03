import { Component } from '@angular/core';
import { MContainerComponent } from '../../m-framework/components/m-container/m-container.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MSearchButtonComponent } from '../../m-framework/components/m-search-button/m-search-button.component';
import { MTableComponent } from '../../m-framework/components/m-table/m-table.component';
import { AlAinGrid } from '../Data/AlAinGrid';


@Component({
  selector: 'app-al-ain',
  standalone: true,
  imports: [MSearchButtonComponent, MTableComponent, CommonModule, FormsModule, MContainerComponent],
  templateUrl: './al-ain.component.html',
  styleUrl: './al-ain.component.css'
})
export class AlAinComponent {
  listOfCoursesAA: AlAinGrid[];
  filterTermAA: string = "";
  showDeleteButton: boolean = true;
  showMoreDetails: boolean = true;
  showCaption: boolean = true;
  caption: string = "";

constructor(){
  this.listOfCoursesAA = [];
  let slot1 = new AlAinGrid(1, "MW", "9:00-10:45", "CEN201");
  let slot2 = new AlAinGrid(2, "MW", "10:55-12:40", "CSC202");
  let slot3 = new AlAinGrid(3, "MW", "12:50-14:35", "CEN333");
  let slot4 = new AlAinGrid(4, "MW", "15:00-16:45", "AIRE305");
  let slot5 = new AlAinGrid(5, "MW", "16:55-18:40", "MTT204");
  let slot6 = new AlAinGrid(6, "MW", "18:50-20:35", "MTT205");
  let slot7 = new AlAinGrid(7, "MW", "20:45-22:30", "CSC202");
  let slot8 = new AlAinGrid(8, "TR", "9:00-10:45", "CEN333");
  let slot9 = new AlAinGrid(9, "TR", "10:55-12:40", "MTT205");
  let slot10 = new AlAinGrid(10, "TR", "12:50-14:35", "AIRE305");
  let slot11 = new AlAinGrid(11, "TR", "15:00-16:45", "MTT205");
  let slot12 = new AlAinGrid(12, "TR", "16:55-18:40", "CEN201");
  let slot13 = new AlAinGrid(13, "TR", "18:50-20:35", "MTT204");
  let slot14 = new AlAinGrid(14, "TR", "20:45-22:30", "CEN201");

this.listOfCoursesAA = [...this.listOfCoursesAA, slot1, slot2, slot3, slot4, slot5, slot6, slot7,
                        slot8, slot9, slot10, slot11, slot12, slot13, slot14];
}
}

