package model;

import view.MansioniDipendenti;

public class Manager extends Dipendente {

    private double moltiplicatoreStipendioManager = 2.1;

    public Manager(String nome, String cognome) {
        super(nome, cognome);
        setMoltiplicatoreStipendio(this.moltiplicatoreStipendioManager);
        setMansione(MansioniDipendenti.MANAGER);
    }

}
