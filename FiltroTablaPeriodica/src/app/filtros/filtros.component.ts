import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Sort } from '@angular/material/sort';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];


@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrl: './filtros.component.css'
})

// Modificicaciones funcionales distintas a las del ejemplo: https://material.angular.io/components/sort/overview 

export class FiltrosComponent implements AfterViewInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  constructor(private _liveAnnouncer: LiveAnnouncer) {}

  @ViewChild(MatSort)
  sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  /* Para anunciar el cambio de estado de clasificación de los filtros */
  announceSortChange(sortState: Sort) {

    /* Creado por mi para que en lugar de aparecer por defecto "asc" o "desc" 
    aparezca lo que nosotros queramos que ponga.*/
    let directionTextoModificado: string;

    /* no modificar espacios, puestos así para que coja la coma de ', orden o filtro despejado', 
    por eso puesto espacios, delante en ' ascendente' y ' descendente' */
    if (sortState.direction === 'asc') {
      directionTextoModificado = ' ascendente';
    } else if (sortState.direction === 'desc') {
      directionTextoModificado = ' descendente';
    } else {
      directionTextoModificado = ', orden o filtro despejado';
    }
    this._liveAnnouncer.announce(`Clasificación${directionTextoModificado}`);
  }

}


