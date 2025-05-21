package model;


import controller.RegistroCtrl;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Registro implements RegistroCtrl {

    /**
     * nomeCorso
     * studenti
     *
     * getStudenteByMatricola(numMat)
     *
     * aggiungiStudenteAlCorso() **ATT**
     */

    List<Studente> studenti = new ArrayList<Studente>();
    List<String> presenze = new ArrayList<String>();

    public Registro() {
    }

    public Studente getStudenteByMatricola(String matricola){
        for(Studente studente : this.studenti){
            if(matricola.equalsIgnoreCase(studente.getMatricola())){
                return studente;
            }
        }
        return null;
    }

    public void aggiungiStudenteAlFile(String pathNameSavingFile, Studente studente){
        if(studente == null){
            throw new IllegalArgumentException("L'oggetto studente é null, fai le dovute verifiche");
        }
        try {
            String cognome = studente.getCognome();
            String nome = studente.getNome();
            String nomeCorso = studente.getCorso();
            String matricola = studente.getMatricola();

            FileWriter file = new FileWriter(pathNameSavingFile, true);
            if(new File(pathNameSavingFile).length() > 0){
                file.append("\n");
            }
            file.append(cognome + "," + nome + "," + nomeCorso + "," + matricola);
            file.close();
            System.out.println("Studente aggiunto con successo al file");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public void aggiungiStudenteAlCorso(String pathNameSavingFile){
        Scanner s = new Scanner(System.in);
        Studente nuovoStudente = new Studente();
        String nome = "";
        String cognome = "";
        String nomeCorso = "";

        while(true) {
            System.out.println("Qual'é il cognome dello studente?");
            cognome = s.nextLine();
            if(cognome.length() < 2 || cognome.matches("[a-zA-Z\\sáéíóú]+")){
                nuovoStudente.setCognome(cognome);
                break;
            }
            System.out.println("Il cognome dello studente deve avere almeno 2 lettere e non puó contenere numeri");
        }
        while(true) {
            System.out.println("Qual'é il nome dello studente?");
            nome = s.nextLine();
            if(nome.length() < 2 || nome.matches("[a-zA-Z\\sáéíóú]+")){
                nuovoStudente.setNome(nome);
                break;
            }
            System.out.println("Il nome dello studente deve avere almeno 2 lettere e non puó contenere numeri");
        }
        while(true) {
            System.out.println("Qual'é il nome del corso dello studente?");
            nomeCorso = s.nextLine();
            if(nomeCorso.length() < 2 || nomeCorso.matches("[a-zA-Z\\s\\d]+")){
                nuovoStudente.setCorso(nomeCorso);
                break;
            }
            System.out.println("Il nome del corso deve avere almeno 2 lettere");
        }
        this.studenti.add(nuovoStudente);
        System.out.println("Studente aggiunto al registro con successo");
        aggiungiStudenteAlFile(pathNameSavingFile, nuovoStudente);
    }

    @Override
    public void caricaStudentiDaFile(File file) {
        try {
            Scanner s = new Scanner(file);
            while(s.hasNextLine()){
                String riga = s.nextLine();
                Studente studente = new Studente();
                String[] infoStudente = riga.split(",");
                studente.setCognome(infoStudente[0]);
                studente.setNome(infoStudente[1]);
                studente.setCorso(infoStudente[2]);
                studente.setMatricola(infoStudente[3]);
                studenti.add(studente);
            }
        } catch (FileNotFoundException e) {
            System.out.println("File not found exception");
        }
    }

    @Override
    public void faiAppello() {
        Scanner s = new Scanner(System.in);
        boolean appelloTerminato = false;
        if(!presenze.isEmpty()){
            System.out.println("Abbiamo giá fatto l'appello oggi\n");
            return;
        }
        System.out.println("Cominciamo l'appello...\n");
        while(!appelloTerminato) {
            for (Studente studente : this.studenti) {
                String risposta = "";
                while(!risposta.equalsIgnoreCase("A") || !risposta.equalsIgnoreCase("P")) {
                    System.out.print(studente.getNome() + " " + studente.getCognome() + " é presente? (P/A) ");
                    risposta  = s.nextLine();
                    if (risposta.equalsIgnoreCase("P")) {
                        presenze.add("presente");
                        System.out.println("Ho segnato presente per " + studente.getCognome() + "\n");
                        break;
                    } else if (risposta.equalsIgnoreCase("A")) {
                        presenze.add("assente");
                        System.out.println("Ho segnato assente per " + studente.getCognome() + "\n");
                        break;
                    } else {
                        System.out.println("Dai ragazzi, prestate un attimo di attenzione. Rispondete, P o A \n");
                    }
                }
                System.out.println();
                if(studenti.indexOf(studente) == studenti.size()-1){
                    appelloTerminato = true;
                }
            }
        }
    }

    @Override
    public void stampaPresenti() {
        if(presenze.isEmpty()) {
            System.out.println("Dobbiamo fare l'appello prima");
            return;
        }

        for (int i = 0; i < this.studenti.size(); i++) {
            if (presenze.get(i).equalsIgnoreCase("presente")) {
                System.out.println(studenti.get(i).getCognome() + " é " + presenze.get(i));
            }
        }
        System.out.println();
    }

    @Override
    public void stampaAssenti() {

        if(presenze.isEmpty()) {
            System.out.println("Dobbiamo fare l'appello prima");
            return;
        }

        for(int i = 0; i < this.studenti.size(); i++) {
            if(presenze.get(i).equalsIgnoreCase("assente")) {
                System.out.println(studenti.get(i).getCognome() + " é " + presenze.get(i));
            }
        }
        System.out.println();
    }

}