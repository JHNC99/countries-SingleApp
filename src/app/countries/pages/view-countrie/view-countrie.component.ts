import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/countries.interface';
import { CountrieService } from '../../services/countrie.service';

@Component({
  selector: 'app-view-countrie',
  templateUrl: './view-countrie.component.html',
})
export class ViewCountrieComponent implements OnInit {
  constructor(
    private activateRoute: ActivatedRoute,
    private countriesService: CountrieService
  ) {}

  country!: Country;
  ngOnInit(): void {
    this.activateRoute.params
      .pipe(
        switchMap(({ id }) => this.countriesService.searchForCode(id)),
        tap(console.log)
      )

      .subscribe((resp) => {
        this.country = resp;
      });
  }
}

/*  this.activateRoute.params.subscribe(({ id }) => {
      this.countriesService.searchForCode(id).subscribe((countries) => {
        console.log(countries);
      });
    }); */
