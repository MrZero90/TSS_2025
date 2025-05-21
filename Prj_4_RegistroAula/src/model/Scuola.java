package model;

import java.util.ArrayList;
import java.util.List;

public class Scuola {

    private String nome;
    private List<Corso> corsi = new ArrayList<Corso>();

    public Scuola(String nome){
        this.nome = nome;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public List<Corso> getCorsi() {
        return corsi;
    }

    public void setCorsi(List<Corso> corsi) {
        this.corsi = corsi;
    }

    public Corso getSingoloCorso(String nomeCorso){
        for(Corso corso : corsi){
            if(corso.getNome().equalsIgnoreCase(nomeCorso)){
                return corso;
            }
        }
        System.out.println("Corso non trovato");
        return null;
    }

    public boolean aggiungiCorsoAllaScuola(Corso corso){
        if(corso != null) {
            this.corsi.add(corso);
            return true;
        }else{
            throw new NullPointerException("Il corso risulta 'null', si prega di verificare l'esistenza del corso");
        }
    }
}
