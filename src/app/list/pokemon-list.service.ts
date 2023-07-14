import { Injectable } from '@angular/core';
import { Observable, map, of, tap } from 'rxjs';
import ListItemModel from './list-item.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonListService {

  constructor(private httpClient: HttpClient) { }

  private storedListItems: ListItemModel[] = [];

  get(): Observable<ListItemModel[]> {
    return this.httpClient.
    get('https://pokeapi.co/api/v2/pokemon?limit=151')
    .pipe(
      map<any, ListItemModel[]>((response) => {
        return response.results.map((result: any) => {
          const id = Number(result.url.split('/')[6]);
          return {
            name: result.name,
            id: id,
            sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
          }
        })
      }),
      tap((listItems) => {
        this.storedListItems = listItems;
      })
    )
  }

  filter(keyword: string): ListItemModel[] {
    return this.storedListItems.filter((item)=>{ 
      return item.name.indexOf(keyword) !== -1;
    });
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
