import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe("Test Recipie 1", "Some description 1", "http://lorempixel.com/400/200/"),
    new Recipe("Test Recipie 2", "Some description 2", "http://lorempixel.com/400/200/"),
    new Recipe("Test Recipie 3", "Some description 3", "http://lorempixel.com/400/200/"),
  ];

  constructor() { }

  ngOnInit() {
  }

  recipeItemSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe)
  }
}
