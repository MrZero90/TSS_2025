package view;

import model.*;

import java.util.InputMismatchException;
import java.util.List;
import java.util.Scanner;

public class MessageUtilities {

    private Scanner s = new Scanner(System.in);

    protected void stampaDipendentiDaList(List<Dipendente> dipendenti){
        System.out.println("Questi sono tutti i dipendenti nella tua azienda");
        for(Dipendente dipendente : dipendenti){
            System.out.println(dipendente);
        }
        System.out.println();
    }

    protected void stampaDipendenteByMatricola(int matricola, Dipendente dipendente){
        if(dipendente == null){
            System.out.println("Nessun dipendente trovato con matricola " + matricola);
            System.out.println();
        } else {
            System.out.println("Dipendente con matricola " + matricola + " trovato...");
            System.out.println(dipendente + "\n");
        }
    }

    protected void stampaDipendenteByMansione(List<Dipendente> dipendenti){
        if (dipendenti.isEmpty()) {
            System.out.println("Nessun dipendente trovato...");
        } else {
            System.out.println("I dipendenti sono:");
            for (Dipendente dipendente : dipendenti) {
                System.out.println(dipendente);
            }
        }
        System.out.println();
    }

    protected void stampaStipendiPagati(double stipendiPagati){
        System.out.println("Hai pagato tutti i stipendi nella tua azienda...");
        System.out.println("Totale: €" + stipendiPagati);
        System.out.println();
    }

    protected void stampaBenvenuto(){
        System.out.println("Bentornato sulla piattaforma...");
    }

    protected void stampaMenu(){
        System.out.println("Cosa desideri fare?");
        System.out.println("1. Trova tutti i dipendenti in azienda.");
        System.out.println("2. Cerca dipendente by matricola.");
        System.out.println("3. Cerca tutti i dipendenti con specifica mansione.");
        System.out.println("4. Paga stipendi ai dipendenti.");
        System.out.println("5. Assumi nuovo dipendente.");
        System.out.println("6. Licenzia dipendente.");
        System.out.println("7. Chiudi applicazione.");
        System.out.print("-> ");
    }

    protected void stampaErroreOpzioneMenuErrata(){
        System.out.println("Inserisci il numero corrispondente all'opzione desiderata");
        System.out.println();
        s.nextLine();
    }

    protected void richiestaDipendenteByMatricola(){
        System.out.println("Inserisci la matricola del dipendente che stai cercando...");
        System.out.print("-> ");
    }

    protected void stampaErroreMatricolaErrata(){
        System.out.println("La matricola deve essere composta da numeri ed é priva di lettere...");
        System.out.println();
    }

    protected void stampaErroreIndexMansioneErrata(){
        System.out.println("La mansione deve essere una delle opzioni sopra indicate...");
        System.out.println();
    }

    protected void stampaErroreMansioneSoloInt(){
        System.out.println("Per scegliere una mansione, indica il valore numerico attribuito a essa...");
        System.out.println();
    }

    protected void richiestaDipendenteByMansione(){
        System.out.println("Qual'é la mansione dei dipendenti che stai cercando?");
        MansioniDipendenti[] mansioni = MansioniDipendenti.values();

        for (int i = 0; i < mansioni.length; i++) {
            System.out.println((i) + ". " + mansioni[i]);
        }
        System.out.print("-> ");
    }

    protected void stampaArrivederci(){
        System.out.println("Chiusura in corso...");
        System.out.println("Ci vediamo presto.");
    }

    protected void richiestaNuovoTentativo(){
        System.out.println("Vuoi provare di nuovo?");
        System.out.println("Per provare di nuovo premi 1");
        System.out.println("Per tornare al menu principale premi qualunque altro tasto");
        System.out.print("-> ");
    }

    protected void stampaAziendaSenzaDipendenti(){
        System.out.println("Non hai dipendenti in azienda...");
        System.out.println();
    }

    protected Dipendente richiestaInformazioniNuovoDipendente() {
        Dipendente dipendente = null;
        MansioniDipendenti mansione = null;

        do {
            int nuovoTentativo;
            do {
                nuovoTentativo = 0;
                try {
                    System.out.println("Mansione nuovo dipendente: ");
                    MansioniDipendenti[] mansioni = MansioniDipendenti.values();
                    for (int i = 0; i < mansioni.length; i++) {
                        System.out.println((i) + ". " + mansioni[i]);
                    }
                    System.out.print("-> ");
                    int mansioneScelta = s.nextInt();
                    s.nextLine();
                    mansione = MansioniDipendenti.values()[mansioneScelta];
                } catch (InputMismatchException e) {
                    s.nextLine();
                    stampaErroreMansioneSoloInt();
                    richiestaNuovoTentativo();
                    nuovoTentativo = s.nextInt();
                    s.nextLine();
                    System.out.println();
                } catch (ArrayIndexOutOfBoundsException ex){
                    stampaErroreIndexMansioneErrata();
                    richiestaNuovoTentativo();
                    nuovoTentativo = s.nextInt();
                    s.nextLine();
                }
            } while (nuovoTentativo == 1);

                System.out.print("Nome nuovo dipendente: ");
                System.out.print("-> ");
                String nome = s.nextLine();

                System.out.print("Cognome nuovo dipendente: ");
                System.out.print("-> ");
                String cognome = s.nextLine();


                switch (mansione) {
                    case PROGRAMMATORE:
                        dipendente = new Programmatore(nome, cognome);
                        break;
                    case HR:
                        dipendente = new HR(nome, cognome);
                        break;
                    case MANAGER:
                        dipendente = new Manager(nome, cognome);
                        break;
                    case SEGRETARIO:
                        dipendente = new Segretario(nome, cognome);
                        break;
                }
            return dipendente;
        } while (dipendente == null);
    }
}
