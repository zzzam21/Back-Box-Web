import { Component } from '@angular/core';
import { SplitterModule } from 'primeng/splitter';
import { CardModule } from 'primeng/card';
import { TabViewModule } from 'primeng/tabview';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-configuration',
  standalone: true,
  imports: [SplitterModule,CardModule,TabViewModule,DividerModule],
  templateUrl: './configuration.component.html',
  styleUrl: './configuration.component.css'
})
export class ConfigurationComponent {
  sidebarVisible4: boolean = false;
}

