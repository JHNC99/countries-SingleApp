import { Component } from '@angular/core';
import { Country } from '../../interfaces/countries.interface';
import { CountrieService } from '../../services/countrie.service';

@Component({
  selector: 'app-for-countries',
  templateUrl: './for-countries.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `,
  ],
})
export class ForCountriesComponent {
  term: string = '';
  isError: boolean = false;
  countries: Country[] = [];
  suggestCountries: Country[] = [];
  showSuggestion: boolean = false;
  constructor(private countriesService: CountrieService) {}
  search(term: string) {
    this.isError = false;
    this.term = term;
    this.countriesService.searchCountries(this.term).subscribe(
      (resp) => {
        this.countries = resp;
        console.log(this.countries);
      },
      (err) => {
        this.isError = true;
        this.countries = [];
      }
    );
  }

  suggestions(value: string) {
    this.isError = false;
    this.term = value;
    this.showSuggestion = true;
    this.countriesService.searchCountries(value).subscribe(
      (countries) => {
        this.suggestCountries = countries.splice(0, 5);
      },
      (err) => {
        this.suggestCountries = [];
      }
    );
  }

  searchSuggestion(term: string) {
    this.search(term);
  }
}
