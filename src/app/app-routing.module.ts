import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ForCapitalComponent } from './countries/pages/for-capital/for-capital.component';
import { ForCountriesComponent } from './countries/pages/for-countries/for-countries.component';
import { ForRegionComponent } from './countries/pages/for-region/for-region.component';
import { ViewCountrieComponent } from './countries/pages/view-countrie/view-countrie.component';

const routes: Route[] = [
  {
    path: '',
    component: ForCountriesComponent,
    pathMatch: 'full',
  },
  {
    path: 'region',
    component: ForRegionComponent,
  },
  {
    path: 'capital',
    component: ForCapitalComponent,
  },
  {
    path: 'countrie/:id',
    component: ViewCountrieComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
