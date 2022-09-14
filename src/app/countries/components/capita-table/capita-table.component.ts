import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/countries.interface';

@Component({
  selector: 'app-capita-table',
  templateUrl: './capita-table.component.html',
})
export class CapitaTableComponent {
  @Input() countries: Country[] = [];
  constructor() {}
}
