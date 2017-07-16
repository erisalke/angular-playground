import { EventEmitter, Output } from '@angular/core';
import { Ingredient } from './../shared/ingredient.model';

export class ShoppingListService {
  @Output() ingredientAdded = new EventEmitter();

  ingredients: Ingredient[] = [
    new Ingredient("orange", 23),
    new Ingredient("apple", 5),
  ]

  newIngredient(ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientAdded.emit();
  }

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredients(ingredients) {
    this.ingredients.push(...ingredients);
    this.ingredientAdded.emit();
  }
}
