import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Country } from '../interfaces/countries.interface';

@Injectable({
  providedIn: 'root',
})
export class CountrieService {
  private apiUrl: string = 'https://restcountries.com/v2';

  get httpParams() {
    return new HttpParams().set(
      'fields',
      'name,capital,flag,alpha2Code,population'
    );
  }
  constructor(private http: HttpClient) {}

  searchCountries(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${term}`;
    return this.http.get<Country[]>(url, { params: this.httpParams });
  }
  searchCapital(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${term}`;
    return this.http.get<Country[]>(url, { params: this.httpParams });
  }
  searchForCode(term: string): Observable<Country> {
    const url = `${this.apiUrl}/alpha/${term}`;
    return this.http.get<Country>(url);
  }
  searchForRegion(term: string) {
    const url = `${this.apiUrl}/region/${term}`;
    return this.http.get<Country[]>(url, { params: this.httpParams });
  }
}
