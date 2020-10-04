import { Component, OnInit } from '@angular/core';
import { Category } from '../categories.model';
import { CategoriesService } from '../categories.service';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit {

  categories:Category[];
  constructor(private categoriesService:CategoriesService) { }

  ngOnInit(): void {
    this.categories=this.categoriesService.getCategories();
  }

}
