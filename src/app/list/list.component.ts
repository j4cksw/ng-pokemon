import { Component } from '@angular/core';
import ListItemModel from './list-item.model';
import { PokemonListService } from './pokemon-list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  listItems: ListItemModel[] = [];

  constructor(private pokemonListService: PokemonListService){}

  ngOnInit() {
    this.pokemonListService.get().subscribe((data)=>{
      this.listItems = data
    });
  }

  onTextInput(event: Event) {
    console.log(event);
  }
}
