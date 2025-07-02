import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {AfterViewInit, ViewChild, inject} from '@angular/core';
import {MatSort, Sort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  symbol: string;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {position: 0, name: 'Sofo', weight:'sebas', symbol: '-'},
  {position: 0, name: 'Luc1233', weight:'lucas', symbol: '-'},
  {position: 0, name: 'Rulas', weight:'Raul' ,symbol: '-'},
  {position: 0, name: 'Miklon Kongu', weight:'Cesar',symbol: '-'},
  {position: 0, name: 'Reifru', weight:'alejandro' ,symbol: '-'},
  {position: 0, name: 'Maskarake', weight:'pablo' ,symbol: '-'},
  {position: 0, name: 'Comadreja', weight:'alvaro' ,symbol: '-'},
  {position: 0, name: 'Laura', weight:'laura' ,symbol: '-'},
  {position: 0, name: 'Ines', weight: 'ines',symbol: '-' },
  {position: 0, name: 'Mario', weight:'mario' ,symbol: '-'},
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatTableModule, MatSortModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  displayedColumns: string[] = ['demo-position', 'demo-name', 'demo-weight', 'demo-symbol'];
  dataSource = ELEMENT_DATA;
}
