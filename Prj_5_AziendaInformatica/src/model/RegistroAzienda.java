package model;

import view.MansioniDipendenti;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;


public class RegistroAzienda {

    private List<Dipendente> dipendenti = new ArrayList<Dipendente>();
    private double stipendiPagati;

    public RegistroAzienda(){
    }

    public void creaFileRegistroDipendenti(String pathname){
        try {
            File file = new File(pathname);
            if (file.createNewFile()) {
                System.out.println("File registroDipendenti é stato creato con successo");
            } else {
                System.out.println("File registroDipendenti é giá esistente");
            }
        } catch (IOException e){
            System.out.println("Mi spiace non trovo il file registroDipendenti.csv dentro la directory '../data/'");
        }
    }

    public void caricaDatiDaFile(String pathname){
        Dipendente dipendente = null;
        try {
            File file = new File(pathname);
            Scanner s = new Scanner(file);

            while(s.hasNextLine()){
                String linea = s.nextLine();
                String[] elementi = linea.split(",");
                int matricola = Integer.parseInt(elementi[0]);
                MansioniDipendenti mansione = MansioniDipendenti.valueOf(elementi[1]);
                String cognome = elementi[2];
                String nome = elementi[3];

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

                dipendente.setMatricola(matricola);
                dipendente.setCognome(cognome);
                dipendente.setNome(nome);
                dipendenti.add(dipendente);
            }
        } catch (IOException e){
            System.out.println("Qualcosa é andato storto durante la creazione/caricamento del file");
        }
    }

    public List<Dipendente> getDipendenti() {
        return dipendenti;
    }

    public void setDipendenti(List<Dipendente> dipendenti) {
        this.dipendenti = dipendenti;
    }

    public List<Dipendente> getDipendentiFilteredByMansione(MansioniDipendenti mansione){
        List<Dipendente> dipendentiUgualeRuolo = new ArrayList<Dipendente>();
        try {
            for (Dipendente dipendente : dipendenti) {
                if (dipendente.getMansione().equals(mansione)) {
                    dipendentiUgualeRuolo.add(dipendente);
                }
            }
            return dipendentiUgualeRuolo;
        } catch (IllegalArgumentException e) {
            System.out.println("L'input deve matchare con esattezza le opzioni su display");
            return null;
        }
    }

    public Dipendente getDipendenteByMatricola(int matricola){
        for(Dipendente dipendente : dipendenti){
            if(dipendente.getMatricola() == matricola){
                return dipendente;
            }
        }
        return null;
    }

    public double calcolaStipendioDipendente(Dipendente dipendente){
        return dipendente.getStipendioBase() * dipendente.getMoltiplicatoreStipendio();
    }



    public double calcolaStipendioDipendenti(){
        double totaleStipendi = 0;
        for(Dipendente dipendente : dipendenti){
            totaleStipendi += calcolaStipendioDipendente(dipendente);
        }
        return totaleStipendi;
    }

    public void pagaStipendiDipendenti(double stipendioDipendenti){
        stipendiPagati += stipendioDipendenti;
        System.out.println("Hai pagato lo stipendio ai dipendenti");
        System.out.println("Spesa totale: " + stipendioDipendenti);
        System.out.println();
    }


    public boolean aggiungiDipendenteAFile(String pathname, Dipendente nuovoDipendente){
        this.dipendenti.add(nuovoDipendente);  
        String matricola = String.valueOf(nuovoDipendente.getMatricola());
        String mansione = String.valueOf(nuovoDipendente.getMansione());
        String cognome = nuovoDipendente.getCognome();
        String nome = nuovoDipendente.getNome();
        try {
            FileWriter file = new FileWriter(pathname, true);
            file.write(matricola + "," + mansione + "," + cognome + "," + nome + "\n");
            file.close();
        } catch (IOException e){
            System.out.println("Qualcosa é andato storto con il file " + pathname + ", verifica la sua esistenza");
        }
        return true;
    }

//    Questa funzione deve rimuovere dal file la riga del dipendente da eliminare e eliminarlo anche dalla variabile dipendenti
//    
//    public boolean rimuoviDipendenteDaFile(String pathname, int matricola){
//    	try {
//    		FileWriter fw = new FileWriter(pathname);
//    		File file = new File(pathname);
//			Scanner s = new Scanner(file);
//    	
//			while(s.hasNextLine()) {
//				String line = s.nextLine();
//				String matricolaDipendente = line.split(",")[0];
//				if(String.valueOf(matricola).equals(matricolaDipendente)) {
//    			
//				}
//			}
//				
//			
//	        for(Dipendente dipendente : dipendenti){
//	            if(dipendente.getMatricola() == matricola){
//	                dipendenti.remove(dipendente);
//	                return true;
//	            }
//	        }
//    	} catch (FileNotFoundException e) {
//    		e.printStackTrace();
//    	} catch (IOException e) {
//			e.printStackTrace();
//		}
//		return false;
//    }

}
