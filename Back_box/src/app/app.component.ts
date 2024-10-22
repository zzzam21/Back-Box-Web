import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PieComponent } from "./components/pie/pie.component";
import { EncabezadoComponent } from "./components/encabezado/encabezado.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PieComponent, EncabezadoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Back_box';
}
