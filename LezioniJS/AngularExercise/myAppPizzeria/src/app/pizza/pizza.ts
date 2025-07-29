import { Component, Input } from '@angular/core';
import { PizzaModel } from './pizza.model';

@Component({
  selector: 'app-pizza',
  imports: [],
  templateUrl: './pizza.html',
  styleUrl: './pizza.css'
})
export class Pizza {

  @Input() pizza!: PizzaModel;

}
