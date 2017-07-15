import { EventEmitter, OnInit } from '@angular/core';

import { Recipe } from './recipe.model';

export class RecipeService implements OnInit {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
      new Recipe('Test Recipie 1', 'Some description 1', 'http://lorempixel.com/400/200/'),
      new Recipe('Test Recipie 2', 'Some description 2', 'http://lorempixel.com/400/200/'),
      new Recipe('Test Recipie 3', 'Some description 3', 'http://lorempixel.com/400/200/'),
    ];

  constructor() {}

  ngOnInit(): void {
  }

  getRecipes() {
    return this.recipes.slice();
  }

  selectRecipe(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
}
