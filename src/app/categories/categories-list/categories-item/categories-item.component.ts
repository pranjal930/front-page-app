import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../../categories.model';

@Component({
  selector: 'app-categories-item',
  templateUrl: './categories-item.component.html',
  styleUrls: ['./categories-item.component.scss']
})
export class CategoriesItemComponent implements OnInit {
  @Input() category:Category;
  constructor() { }

  ngOnInit(): void {
  }

}
