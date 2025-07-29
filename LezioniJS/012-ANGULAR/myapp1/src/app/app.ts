import { Component, signal } from '@angular/core';
import { Card } from "./card/card";
import { Studente } from './studente/studente.model';
import { STUDENTI_DB } from './STUDENTI_DB';

@Component({
  selector: 'app-root',
  imports: [Card],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // protected readonly title = signal('myapp1'); questa è una cosa complessa

  title: string = "Mia Prima App";
  nomeAutore: string = "Claudio Currò";

  // mieiStudenti =[
  //   {
  //     id: "s1",
  //     nome: "Laura",
  //     cognome: "Verdi",
  //     materie:["JS", "Html", "Java"]
  //   },
  //   {
  //     id: "s2",
  //     nome: "Luca",
  //     cognome: "Rossi",
  //     materie:["Angular"]
  //   },
  //   {
  //     id: "s3",
  //     nome: "Maria",
  //     cognome: "Gialli",
  //     materie:[]
  //   }
  // ]

  mieiStudenti: Studente[] = STUDENTI_DB;
}
