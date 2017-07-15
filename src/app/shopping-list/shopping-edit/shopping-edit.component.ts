import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameRef') nameInputReference: ElementRef;
  @ViewChild('amountRef') amountInputReference: ElementRef;
  @Output() newIngredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  onIngredientAdded() {
    const name = this.nameInputReference.nativeElement.value;
    const amount = this.amountInputReference.nativeElement.value;
    const newIngredient = new Ingredient(name, amount);
    this.newIngredientAdded.emit(newIngredient);
  }
}
