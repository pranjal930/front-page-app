import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurant-item',
  templateUrl: './restaurant-item.component.html',
  styleUrls: ['./restaurant-item.component.scss']
})
export class RestaurantItemComponent implements OnInit {
  @Input() restaurant;
   stars:string[]=[];
  constructor() { }

  ngOnInit(): void {
    for(let i=0;i<5;i++)
    {
      if(i<this.restaurant.rating-1)
      this.stars.push('*');
      else
      this.stars.push('.');

    }
    console.log(this.stars);
  }

}
