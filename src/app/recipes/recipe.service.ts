import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Ingredient } from './../shared/ingredient.model';
import { EventEmitter, OnInit, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService implements OnInit {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
      new Recipe(
        'Chicken soup',
        'Tasty soup made of chicken',
        'http://lorempixel.com/400/200/',
        [
          new Ingredient("chicken", 1),
          new Ingredient("onion", 1),
          new Ingredient("carrot", 2),
        ]
      ),
      new Recipe(
        'Beef steak',
        'Nice piece of grilled beef meat',
        'http://lorempixel.com/400/200/',
        [
          new Ingredient("beef steak", 1),
          new Ingredient("potatoes", 2),
        ]
      ),
    ];

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
  }

  getRecipes() {
    return this.recipes.slice();
  }

  selectRecipe(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
