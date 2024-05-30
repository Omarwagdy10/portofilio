import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MyprojectsComponent } from './myprojects/myprojects.component';
import { TecqniquesComponent } from './tecqniques/tecqniques.component';

@Component({
  selector: 'app-continer',
  standalone: true,
  imports: [HomeComponent,AboutComponent, MyprojectsComponent,TecqniquesComponent],
  templateUrl: './continer.component.html',
  styleUrl: './continer.component.css'
})
export class ContinerComponent {

}
