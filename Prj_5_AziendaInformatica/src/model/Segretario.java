package model;

import view.MansioniDipendenti;

public class Segretario extends Dipendente {

    private double moltiplicatoreStipendioSegretario = 1.3;

    public Segretario(String nome, String cognome) {
        super(nome, cognome);
        setMoltiplicatoreStipendio(this.moltiplicatoreStipendioSegretario);
        setMansione(MansioniDipendenti.SEGRETARIO);
    }

}
