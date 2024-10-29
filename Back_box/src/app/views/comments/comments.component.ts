import { Component } from '@angular/core';
import { EncabezadoComponent } from "../../components/encabezado/encabezado.component";
import { PieComponent } from "../../components/pie/pie.component";
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ImageModule } from 'primeng/image';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [ImageModule,EncabezadoComponent, PieComponent, InputTextareaModule, FloatLabelModule, FormsModule,ButtonModule, CardModule],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css'
})
export class CommentsComponent {

}
