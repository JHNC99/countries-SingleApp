import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ForCapitalComponent } from './pages/for-capital/for-capital.component';
import { ForCountriesComponent } from './pages/for-countries/for-countries.component';
import { ForRegionComponent } from './pages/for-region/for-region.component';
import { ViewCountrieComponent } from './pages/view-countrie/view-countrie.component';
import { RouterModule } from '@angular/router';
import { CountriesTableComponent } from './components/countries-table/countries-table.component';
import { CountriesInputComponent } from './components/countries-input/countries-input.component';
import { CapitalInputComponent } from './components/capital-input/capital-input.component';
import { CapitaTableComponent } from './components/capita-table/capita-table.component';

@NgModule({
  declarations: [
    ForCapitalComponent,
    ForCountriesComponent,
    ForRegionComponent,
    ViewCountrieComponent,
    CountriesTableComponent,
    CountriesInputComponent,
    CapitalInputComponent,
    CapitaTableComponent,
  ],
  exports: [
    ForCapitalComponent,
    ForCountriesComponent,
    ForRegionComponent,
    ViewCountrieComponent,
  ],
  imports: [CommonModule, FormsModule,RouterModule],
})
export class CountriesModule {}
