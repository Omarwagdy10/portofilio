import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './continer/home/home.component';
import { AboutComponent } from './continer/about/about.component';
import { MyprojectsComponent } from './continer/myprojects/myprojects.component';
import { TecqniquesComponent } from './continer/tecqniques/tecqniques.component';
import { ContinerComponent } from './continer/continer.component';
import { FooterComponent } from './footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,FooterComponent,ContinerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project';
}
