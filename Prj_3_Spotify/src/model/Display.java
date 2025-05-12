package model;

import java.util.ArrayList;
import java.util.List;

public class Display {

    List<String> opzioni = new ArrayList<String>();

    public Display() {

    }

    // metodi
    public void mostraOpzioniMenuIniziale(){
        System.out.println("1. Avvia playlist");
        System.out.println("2. Aggiungi brano nella playlist");
        System.out.println("3. Rimuovi brano dalla playlist");
        System.out.println("4. Chiudi app");
    }

    public void mostraBraniNellaPlaylist(Playlist playlist){
        System.out.println("Quale brano vuoi ascoltare?");
        for(int i = 0; i < playlist.brani.size(); i++) {
            System.out.println((i+1) + ". " + playlist.brani.get(i));
        }
    }

    public void richiediCanzoneDaAggiungere(){
        System.out.println("Qual'é il titolo del brano che vuoi aggiungere?");
    }

    public void richiediCanzoneDaRimuovere(Playlist playlist){
        System.out.println("Qual'é il titolo del brano che vuoi rimuovere?");
        for(int i = 0; i < playlist.brani.size(); i++) {
            System.out.println((i+1) + ". " + playlist.brani.get(i));
        }
    }

}
