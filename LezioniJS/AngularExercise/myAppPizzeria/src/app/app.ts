import { Component, signal } from '@angular/core';
import { PIZZE_DB } from './PIZZE_DB';
import { PizzaModel } from './pizza/pizza.model';
import { Pizza } from './pizza/pizza'

@Component({
  selector: 'app-root',
  imports: [Pizza],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  imgLogo: string = "https://images.unsplash.com/vector-1739799629983-f317eb99967c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGl6emF8ZW58MHx8MHx8fDI%3D";
  webName: string = "Mamma che pizze";
  pizzeInDb: PizzaModel[] = PIZZE_DB;

}
