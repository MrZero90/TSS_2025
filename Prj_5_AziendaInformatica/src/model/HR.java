package model;

import view.MansioniDipendenti;

public class HR extends Dipendente {

    private double moltiplicatoreStipendioHR = 1.5;

    public HR(String nome, String cognome) {
        super(nome, cognome);
        setMoltiplicatoreStipendio(this.moltiplicatoreStipendioHR);
        setMansione(MansioniDipendenti.HR);
    }

}
