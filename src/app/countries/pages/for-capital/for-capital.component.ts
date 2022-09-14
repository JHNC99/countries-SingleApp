import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/countries.interface';
import { CountrieService } from '../../services/countrie.service';

@Component({
  selector: 'app-for-capital',
  templateUrl: './for-capital.component.html',
})
export class ForCapitalComponent implements OnInit {
  term: string = '';
  isError: boolean = false;
  countries: Country[] = [];
  constructor(private cuntrieService: CountrieService) {}
  ngOnInit(): void {}
  search(term: string) {
    this.isError = false;
    this.term = term;
    this.cuntrieService.searchCapital(this.term).subscribe(
      (resp) => {
        this.countries = resp;
        console.log(resp);
      },
      (err) => {
        this.isError = true;
        this.countries = [];
      }
    );
  }
  suggestions(value: string) {
    this.isError = false;
  }
}
