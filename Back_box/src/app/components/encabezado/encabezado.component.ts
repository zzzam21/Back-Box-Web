import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-encabezado',
  standalone: true,
  imports: [MenubarModule],
  templateUrl: './encabezado.component.html',
  styleUrl: './encabezado.component.css'
})
export class EncabezadoComponent {
  items: MenuItem[]|undefined;
  ngOnInit(){
    this.items = [
      {
        label: 'Inicio',
        routerLink:'home',
        icon: 'pi pi-home'
      },
      {
        label: 'Linea de tiempo',
        routerLink:'lineTime',
        icon: 'pi pi-history'
      },
      {
        label: 'Configuración',
        routerLink:'configuration',
        icon: 'pi pi-cog'
      },
      {
        label: 'Sitios de Interés',
        routerLink:'interst',
        icon: 'pi pi-lightbulb'
      },
      {
        label: 'Funcionalidad',
        routerLink:'functions',
        icon: 'pi pi-slack'
      },
      {
        label: 'Comentarios',
        routerLink:'comments',
        icon: 'pi pi-comments'
      }
    ]
  }
}
