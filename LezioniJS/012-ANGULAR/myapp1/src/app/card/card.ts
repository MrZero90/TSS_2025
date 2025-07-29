import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card {

  // nomeCard: string = "Card";
  // descrizione: string = "Questa è una descrizione";
  // imgPath: string = "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxzZWFyY2h8OHx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D";

  // sarebbe obbligatorio inizializzare la variabile
  // quindi mettiamo il punto esclamativo davanti per tranquillizzare 
  // angular che andremo a dare un valore in futuro
  @Input() id!: string;
  @Input() nome!: string;
  @Input() cognome!: string;
  @Input() materie!: string[];
}
