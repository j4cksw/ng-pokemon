import { TestBed } from '@angular/core/testing';

import { PokemonListService } from './pokemon-list.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

describe('PokemonListService', () => {
  let service: PokemonListService;
  const httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: HttpClient, useValue: httpClientSpy }],
    });
    service = TestBed.inject(PokemonListService);
  });

  it('should transform response from API to list of ListItemModel', () => {
    httpClientSpy.get.and.returnValue(
      of({
        results: [
          {
            name: 'bulbasaur',
            url: 'https://pokeapi.co/api/v2/pokemon/1/',
          },
          {
            name: 'ivysaur',
            url: 'https://pokeapi.co/api/v2/pokemon/2/',
          },
        ],
      })
    );

    service.get().subscribe((data) => {
      expect(data.length).toBe(2);
      expect(data[0]).toEqual({ name: 'bulbasaur', id: 1});
    });
  });

  it('should filter list by given keyword', () => {
    httpClientSpy.get.and.returnValue(
      of({
        results: [
          {
            name: 'bulbasaur',
            url: 'https://pokeapi.co/api/v2/pokemon/1/',
          },
          {
            name: 'ivysaur',
            url: 'https://pokeapi.co/api/v2/pokemon/2/',
          },
        ],
      })
    );

    service.get().subscribe((data) => {
      let filterResult = service.filter('bulbasaur');
      expect(filterResult.length).toEqual(1);
      expect(filterResult[0]).toEqual({ name: 'bulbasaur', id: 1})
    });
  })
});
