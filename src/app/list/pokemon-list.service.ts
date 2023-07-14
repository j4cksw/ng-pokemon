import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import ListItemModel from './list-item.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonListService {

  constructor(private httpClient: HttpClient) { }

  get(): Observable<ListItemModel[]> {
    return this.httpClient.
    get('https://pokeapi.co/api/v2/pokemon?limit=151')
    .pipe(
      map<any, ListItemModel[]>((response) => {
        return response.results.map((result: any) => {
          return {
            name: result.name,
            id: Number(result.url.split('/')[6])
          }
        })
      })
    )
  }
}

export interface PokemonListResponse {
  count: number
  next: string
  previous: any
  results: Result[]
}

interface Result {
  name: string
  url: string
}
