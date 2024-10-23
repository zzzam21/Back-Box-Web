import { Component } from '@angular/core';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-linetime',
  standalone: true,
  imports: [TimelineModule,CardModule],
  templateUrl: './linetime.component.html',
  styleUrl: './linetime.component.css'
})
export class LinetimeComponent {
  events: any[] = [
    {
      status: 'Lanzamiento Inicial', date: '09/09/2010', icon: 'pi pi-box', iconColor: '#1783b1', iconSize: '1.5em'
    },
    {
      status: 'BackBox 2.0', date: '16/10/2011',details: 'Lanzada en 2011, esta versión fue una de las primeras en obtener visibilidad. Basada en Ubuntu 10.04 LTS, fue crucial en la expansión de la comunidad de usuarios de BackBox.', icon: 'pi pi-box', iconColor: '#1783b1', iconSize: '1.5em'
    },
    {
      status: 'BackBox 4.0', date: '10/10/2014',details: 'Lanzada en 2014, esta versión introdujo mejoras en el rendimiento y nuevas herramientas de pentesting. Estaba basada en Ubuntu 14.04 LTS.', icon: 'pi pi-box', iconColor: '#1783b1', iconSize: '1.5em'
    },
    {
      status: 'BackBox 5.0', date: '21/12/2018',details: 'Lanzada en 2018, estaba basada en Ubuntu 16.04 LTS y continuó añadiendo nuevas herramientas y mejoras en la experiencia del usuario.', icon: 'pi pi-box', iconColor: '#1783b1', iconSize: '1.5em'
    },
    {
      status: 'BackBox 7.0', date: '27/10/2021',details: 'Lanzada en 2021, estaba basada en Ubuntu 20.04 LTS. Introdujo una mayor cantidad de herramientas para análisis de seguridad y pruebas de vulnerabilidad.', icon: 'pi pi-box', iconColor: '#1783b1', iconSize: '1.5em'
    },
  ]
}
