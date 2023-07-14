import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { DetailsModel } from './details/details.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PokemonDetailsService {
  constructor(private httpClient: HttpClient) {}

  getById(id: number): Observable<DetailsModel> {
    return this.httpClient
      .get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .pipe(map<any, DetailsModel>((response) => {
        return {
          name: response.name,
          image: response['sprites']['other']['official-artwork']['front_default'],
          type: response.types.map((type: any)=>type.type.name).join(','),
          weight: response.weight
        }
      }));
  }
}
