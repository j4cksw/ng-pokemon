import { TestBed } from '@angular/core/testing';

import { PokemonListService } from './pokemon-list.service';
import { HttpClient } from '@angular/common/http';

describe('PokemonListService', () => {
  let service: PokemonListService;
  const httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: HttpClient, useValue: httpClientSpy }],
    });
    service = TestBed.inject(PokemonListService);
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
