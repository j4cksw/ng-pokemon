import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  id: number = -1;

  constructor(private router: ActivatedRoute){}

  ngOnInit() {
    this.id = Number(this.router.snapshot.paramMap.get('id')) ?? 0;
  }
}
