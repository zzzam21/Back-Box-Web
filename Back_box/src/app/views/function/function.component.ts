import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';


@Component({
  selector: 'app-function',
  standalone: true,
  imports: [CardModule, DividerModule],
  templateUrl: './function.component.html',
  styleUrl: './function.component.css'
})
export class FunctionComponent {

}
