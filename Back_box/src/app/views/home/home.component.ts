import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { CardModule } from 'primeng/card';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselModule,ButtonModule,TagModule,CardModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  responsiveOptions: any[] | undefined;
  user: any[] = [
    {name:'Raffaele Forte',description:'Fundador de Back Box y <br> desarrollador principal'},
    {name:'Stefan Umit Uygur',description:'Encargada de las relaciones publicas'},
    {name:'Gianfranco Costamagna',description:'Encargado de mantener el repositorio'},
    {name:'Andrea Draghetti',description:'Community Staff'}
  ];
}
