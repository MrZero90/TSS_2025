package view;

import model.*;

import java.util.InputMismatchException;
import java.util.List;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        RegistroAzienda registro = new RegistroAzienda();
        MessageUtilities utility = new MessageUtilities();

        String pathNameRegistroDipendenti = "data/registroDipendenti.csv";
        registro.creaFileRegistroDipendenti(pathNameRegistroDipendenti);
        registro.caricaDatiDaFile(pathNameRegistroDipendenti);

//        registro.aggiungiDipendenteAFile(new Programmatore("Mario", "Rossi"));
//        registro.aggiungiDipendenteAFile(new HR("Luigi", "Verdi"));
//        registro.aggiungiDipendenteAFile(new Segretario("Melania", "Gialli"));
//        registro.aggiungiDipendenteAFile(new Manager("Sofia", "Bianchi"));

//        System.out.println(registro.getDipendenti());

        utility.stampaBenvenuto();

        boolean closeApp = false;
        int scelta;
        Scanner s = new Scanner(System.in);

//        System.out.println("1. Trova tutti i dipendenti in azienda.");
//        System.out.println("2. Cerca dipendente by matricola.");
//        System.out.println("3. Cerca tutti i dipendenti con specifica mansione.");
//        System.out.println("4. Paga stipendi ai dipendenti.");
//        System.out.println("5. Assumi nuovo dipendente.");
//        System.out.println("6. Licenzia dipendente.");
//        System.out.println("7. Chiudi applicazione.");

        while(!closeApp){
            try {
                utility.stampaMenu();
                scelta = s.nextInt();
                s.nextLine();
                System.out.println();
            } catch (InputMismatchException e){
                utility.stampaErroreOpzioneMenuErrata();
                continue;
            }
            int nuovoTentativo;

            switch(scelta){
                case 1:
                    if(registro.getDipendenti().isEmpty()){
                        utility.stampaAziendaSenzaDipendenti();
                        break;
                    }
                    utility.stampaDipendentiDaList(registro.getDipendenti());
                    break;
                case 2:
                    if(registro.getDipendenti().isEmpty()){
                        utility.stampaAziendaSenzaDipendenti();
                        break;
                    }
                    do {
                        utility.richiestaDipendenteByMatricola();
                        try {
                            int matricola = s.nextInt();
                            s.nextLine();
                            System.out.println();
                            Dipendente dipendenteTrovato = registro.getDipendenteByMatricola(matricola);
                            utility.stampaDipendenteByMatricola(matricola, dipendenteTrovato);
                            break;
                        } catch (InputMismatchException e) {
                            s.nextLine();
                            utility.stampaErroreMatricolaErrata();
                            utility.richiestaNuovoTentativo();
                            try {
                                nuovoTentativo = s.nextInt();
                                s.nextLine();
                                System.out.println();
                            } catch (InputMismatchException ex){
                                s.nextLine();
                                break;
                            }
                        }
                    } while(nuovoTentativo == 1);
                    break;
                case 3:
                    if(registro.getDipendenti().isEmpty()){
                        utility.stampaAziendaSenzaDipendenti();
                        break;
                    }
                    do {
                        try {
                            utility.richiestaDipendenteByMansione();
                            int numeroMansione = s.nextInt();
                            s.nextLine();
                            System.out.println();
                            MansioniDipendenti mansioneScelta = MansioniDipendenti.values()[numeroMansione];
                            List<Dipendente> dipendentiTrovati = registro.getDipendentiFilteredByMansione(mansioneScelta);
                            utility.stampaDipendenteByMansione(dipendentiTrovati);
                            break;
                        } catch (InputMismatchException e){
                            s.nextLine();
                            utility.stampaErroreMansioneSoloInt();
                            utility.richiestaNuovoTentativo();
                            try {
                                nuovoTentativo = s.nextInt();
                                s.nextLine();
                            } catch (InputMismatchException ex){
                                s.nextLine();
                                break;
                            }
                        } catch (ArrayIndexOutOfBoundsException e){
                            utility.stampaErroreIndexMansioneErrata();
                            utility.richiestaNuovoTentativo();
                            try {
                                nuovoTentativo = s.nextInt();
                                s.nextLine();
                            } catch (InputMismatchException ex){
                                s.nextLine();
                                break;
                            }
                        }
                    } while(nuovoTentativo == 1);
                    break;
                case 4:
                    if(registro.getDipendenti().isEmpty()){
                        utility.stampaAziendaSenzaDipendenti();
                        break;
                    }
                    double totaleStipendi = registro.calcolaStipendioDipendenti();
                    registro.pagaStipendiDipendenti(totaleStipendi);
                    break;
                case 5:
                    Dipendente dipendente = utility.richiestaInformazioniNuovoDipendente();
                    registro.aggiungiDipendenteAFile(pathNameRegistroDipendenti, dipendente);
                    break;
                case 6:
                    if(registro.getDipendenti().isEmpty()){
                        utility.stampaAziendaSenzaDipendenti();
                        break;
                    }
                    System.out.println("Feature da implementare...");
                    break;
                case 7:
                    closeApp = true;
                    break;
                default:
                    System.out.println("Scegli una delle opzioni mostrate...");

            }
        }
        utility.stampaArrivederci();

//        System.out.println(registro.getDipendentiFilteredByClass("Manager"));


    }
}
