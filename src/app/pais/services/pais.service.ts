import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private apiUrl: string = 'https://restcountries.eu/rest/v2';

  constructor(private http: HttpClient) { }

  get httpParams() {
    return new HttpParams().set('fields', 'name;capital;alpha2Code;flag;population');
  }

  getCountriesByName(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get<Country[]>(url, {params: this.httpParams});
  }

  getCountriesByCapital(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<Country[]>(url, {params: this.httpParams});
  }

  getCountriesByRegion(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${termino}`;
    return this.http.get<Country[]>(url, {params: this.httpParams});
  }

  getCountryByCode(id: string): Observable<Country> {
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country>(url);
  }

}
