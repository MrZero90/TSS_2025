package model;

import view.MansioniDipendenti;

public class Programmatore extends Dipendente {

    private double moltiplicatoreStipendioProgrammatore = 1.7;

    public Programmatore(String nome, String cognome) {
        super(nome, cognome);
        setMoltiplicatoreStipendio(this.moltiplicatoreStipendioProgrammatore);
        setMansione(MansioniDipendenti.PROGRAMMATORE);
    }

}
