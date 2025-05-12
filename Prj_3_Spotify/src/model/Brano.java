package model;

public class Brano {

    // proprietá

    String autore;
    String titolo;
    String genere;
    int durataMinuti;

    // costruttore

    public Brano(String titolo) {
        this.titolo = titolo;
    }


    public Brano(String autore, String titolo, String genere, int durataMinuti) {
        this.autore = autore;
        this.titolo = titolo;
        this.genere = genere;
        this.durataMinuti = durataMinuti;
    }

    // metodi


    @Override
    public String toString() {
        return  "'" + titolo + "'" + " by " + autore;
    }

    public void play(){
        System.out.println("Il brano '" + this.titolo + "' inizia a suonare");
    }

    public void stampaInfo(){
        System.out.println(
                "Autore: " + this.autore +
                ", Titolo: " + this.titolo +
                ", Genere: " + this.genere +
                ", Durata: " + this.durataMinuti);
    }


}
