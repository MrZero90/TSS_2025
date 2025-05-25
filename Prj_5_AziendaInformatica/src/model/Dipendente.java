package model;

import view.MansioniDipendenti;

public abstract class Dipendente {

    private static int contatore = 1;
    private int matricola;
    private String nome = "nome";
    private String cognome = "cognome";
    private MansioniDipendenti mansione;
    private final double stipendioBase = 1000;
    private double moltiplicatoreStipendio = 1;

    protected Dipendente(){
        this.matricola = contatore++;
    }

    protected Dipendente(String nome, String cognome) {
        this.matricola = contatore++;
        this.nome = nome;
        this.cognome = cognome;
    }

    public String getDatiDipendente() {
        return  "matricola=" + getMatricola() +
                ", nome='" + getNome() + '\'' +
                ", cognome='" + getCognome() + '\'' +
                ", moltiplicatoreStipendio=" + getMoltiplicatoreStipendio() +
                '}';
    }


    public int getMatricola() {
        return matricola;
    }

    public void setMatricola(int matricola) {
        this.matricola = matricola;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getCognome() {
        return cognome;
    }

    public void setCognome(String cognome) {
        this.cognome = cognome;
    }

    public MansioniDipendenti getMansione() {
        return mansione;
    }

    public void setMansione(MansioniDipendenti mansione) {
        this.mansione = mansione;
    }

    public double getStipendioBase() {
        return stipendioBase;
    }

    public double getMoltiplicatoreStipendio() {
        return moltiplicatoreStipendio;
    }

    public void setMoltiplicatoreStipendio(double moltiplicatoreStipendio) {
        this.moltiplicatoreStipendio = moltiplicatoreStipendio;
    }

    @Override
    public String toString() {
        return "Dipendente{" +
                "mansione=" + this.mansione +
                ", matricola=" + this.matricola +
                ", nome='" + this.nome + '\'' +
                ", cognome='" + this.cognome + '\'' +
                '}';
    }
}
