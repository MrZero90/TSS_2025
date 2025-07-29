import { Studente } from "./studente/studente.model";
// l'export mi serve per poterlo leggere negli altri file
export const STUDENTI_DB: Studente[] = [
    {
      id: "s1",
      nome: "Laura",
      cognome: "Verdi",
      materie:["JS", "Html", "Java"]
    },
    {
      id: "s2",
      nome: "Luca",
      cognome: "Rossi",
      materie:["Angular"]
    },
    {
      id: "s3",
      nome: "Maria",
      cognome: "Gialli",
      materie:[]
    }
]