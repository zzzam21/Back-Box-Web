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
        icon: 'pi pi-home'
      },
      {
        label: 'Historial',
        icon: 'pi pi-history'
      },
      {
        label: 'Configuración',
        icon: 'pi pi-cog'
      },
      {
        label: 'Sitios de Interés',
        icon: 'pi pi-lightbulb'
      },
      {
        label: 'Funcionalidad',
        icon: 'pi pi-slack'
      },
      {
        label: 'Comentarios',
        icon: 'pi pi-comments'
      }
    ]
  }
}
