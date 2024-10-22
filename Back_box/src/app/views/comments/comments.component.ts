import { Component } from '@angular/core';
import { EncabezadoComponent } from "../../components/encabezado/encabezado.component";
import { PieComponent } from "../../components/pie/pie.component";

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [EncabezadoComponent, PieComponent],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css'
})
export class CommentsComponent {

}
