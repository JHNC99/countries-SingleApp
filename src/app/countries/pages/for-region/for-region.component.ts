import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/countries.interface';
import { CountrieService } from '../../services/countrie.service';

@Component({
  selector: 'app-for-region',
  templateUrl: './for-region.component.html',
})
export class ForRegionComponent implements OnInit {
  regions: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActive: string = '';
  countries: Country[] = [];
  constructor(private countriesService: CountrieService) {}

  ngOnInit(): void {}

  getClass(region: string) {
    return region === this.regionActive
      ? 'btn btn-primary'
      : 'btn btn-outline-primary';
  }
  activeRegion(region: string) {
    if (region == this.regionActive) return;
    this.regionActive = region;

    this.countries = [];
    this.countriesService.searchForRegion(region).subscribe((resp) => {
      this.countries = resp;
      console.log(this.countries);
    });
  }
}
