import { TestBed } from '@angular/core/testing';

import { PokemonDetailsService } from './pokemon-details.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

describe('PokemonDetailsService', () => {
  let service: PokemonDetailsService;
  const httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: HttpClient, useValue: httpClientSpy }],
    });
    service = TestBed.inject(PokemonDetailsService);
  });

  it('getById() should publish DetailsModel', () => {
    httpClientSpy.get.and.returnValue(
      of({
        name: 'mew',
        sprites: {
          other: {
            "official-artwork": {
              front_default: 'img.png'
            }
          }
        },
        weight: 999,
        types: [
          {
            slot: 1,
            type: {
              name: 'electric',
              url: 'https://pokeapi.co/api/v2/type/13/',
            },
          },
          {
            slot: 2,
            type: {
              name: 'normal',
              url: 'https://pokeapi.co/api/v2/type/13/',
            },
          },
        ],
      })
    );
    
    service.getById(1).subscribe((data) => {
      expect(data).toEqual({
        name: 'mew',
        image: 'img.png',
        weight: 999,
        type: 'electric,normal',
      });
    });
  });
});
