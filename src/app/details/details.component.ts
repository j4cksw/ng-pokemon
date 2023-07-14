import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailsModel } from './details.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  id: number = -1;

  detailsModel: DetailsModel = {
    name: 'Pikachu',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/26.png',
    type: 'electric',
    weight: 999
  }

  constructor(private router: ActivatedRoute){}

  ngOnInit() {
    this.id = Number(this.router.snapshot.paramMap.get('id')) ?? 0;
  }
}
