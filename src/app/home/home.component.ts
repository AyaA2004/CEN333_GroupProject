import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MContainerComponent } from "../m-framework/components/m-container/m-container.component";

@Component({
  selector: 'app-home',
  imports: [ CommonModule, FormsModule, MContainerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(public router: Router){
  }

  viewScheduleapp() {
    this.router.navigateByUrl('/feature1'); // Go to '/hardware' route
  }

  addCourseapp() {
    this.router.navigateByUrl('/feature2'); // Go to '/software' route
  }

}