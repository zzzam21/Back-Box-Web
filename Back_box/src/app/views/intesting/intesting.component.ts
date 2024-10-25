import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ImageModule } from 'primeng/image';
@Component({
  selector: 'app-intesting',
  standalone: true,
  imports: [ButtonModule,CardModule,ImageModule],
  templateUrl: './intesting.component.html',
  styleUrl: './intesting.component.css'
})
export class IntestingComponent {

}
