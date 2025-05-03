import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MHeaderComponent } from './m-framework/components/m-header/m-header.component';
import { MCardComponent } from './m-framework/components/m-card/m-card.component';
import { MContainerComponent } from './m-framework/components/m-container/m-container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, MHeaderComponent, MCardComponent, MContainerComponent],  
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'University Course Scheduling';
  
  constructor() {
  }
}
