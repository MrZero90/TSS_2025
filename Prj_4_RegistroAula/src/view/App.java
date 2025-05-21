package view;

import model.Registro;
import model.Studente;

import java.io.File;
import java.util.Scanner;

public class App {

    public static void main(String[] args) {

        Registro registro = new Registro();
        Scanner s = new Scanner(System.in);
        String pathNameSavingFile = "elencoStudenti_TSS.csv";
        File elencoStudenti = new File(pathNameSavingFile);
        registro.caricaStudentiDaFile(elencoStudenti);

        boolean chiudiApp = false;
        while(!chiudiApp){
            System.out.println("Cosa facciamo?");
            System.out.println("1. Facciamo appello");
            System.out.println("2. Stampa presenti");
            System.out.println("3. Stampa assenti");
            System.out.println("4. Aggiungi nuovo studente al corso");
            System.out.println("5. Trova studente usando la matricola");
            System.out.println("6. Chiudi app");
            String opzione = s.nextLine();

            switch(opzione){
                case "1":
                    registro.faiAppello();
                    break;
                case "2":
                    registro.stampaPresenti();
                    break;
                case "3":
                    registro.stampaAssenti();
                    break;
                case "4":
                    System.out.println("Stai aggiungendo uno studente al corso...");
                    registro.aggiungiStudenteAlCorso(pathNameSavingFile);
                    break;
                case "5":
                    System.out.println("Stai cercando uno studente tramite la sua matricola...");
                    System.out.println("Qual'é la matricola dello studente?");
                    String matricolaFornita = s.nextLine();
                    Studente studenteCercato = registro.getStudenteByMatricola(matricolaFornita);
                    if(studenteCercato != null) {
                        System.out.println(studenteCercato);
                    }else{
                        System.out.println("Studente non trovato");
                    }
                    break;
                case "6":
                    System.out.println("Alla prossima");
                    chiudiApp = true;
                    break;
            }


        }


    }

}
