import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Test Recipie", "Some description", "http://lorempixel.com/400/200/"),
    new Recipe("Test Recipie", "Some description", "http://lorempixel.com/400/200/"),
    new Recipe("Test Recipie", "Some description", "http://lorempixel.com/400/200/"),
  ];

  constructor() { }

  ngOnInit() {
  }

}
