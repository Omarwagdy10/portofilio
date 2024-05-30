import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos'

@Component({
  selector: 'app-tecqniques',
  standalone: true,
  imports: [],
  templateUrl: './tecqniques.component.html',
  styleUrl: './tecqniques.component.css'
})
export class TecqniquesComponent implements OnInit {

  ngOnInit(): void {
    AOS.init();

  }
}
