package conto;

import java.time.LocalDate;
import java.util.Scanner;

public class ContoCorrente {

    // proprietá

    static int contatore = 1000;
    int numConto;
    String titolare;
    double saldo = 0;
    LocalDate dataApertura;

    // costruttori

    public ContoCorrente(){
        this.numConto = contatore++;
        this.dataApertura = LocalDate.now();
    };

    // metodi

    @Override
    public String toString() {
        return "ContoCorrente{" +
                "numConto=" + numConto +
                ", titolare='" + titolare + '\'' +
                ", saldo=" + saldo +
                ", dataApertura=" + dataApertura +
                '}';
    }

    public void numeraConto(int nuovoNumConto){
        this.numConto = nuovoNumConto;
    }

    public void versamento(){
        while (true) {
            try {
            System.out.println("Quanto vuoi versare?");

            double somma = new Scanner(System.in).nextDouble();
            if (somma > 0) {
                this.saldo += somma;
                System.out.println("Il tuo nuovo saldo é " + this.saldo);
                break;
            }
            System.out.println("Si prega di inserire un valore maggiore di 0.");
            } catch (RuntimeException e) {
                System.out.println("Qualcosa é andato storto");
            }
        }
    }

    public void prelievo(){
        while(true){
            try{

                System.out.println("Quanto vuole prelevare?");

                double somma = new Scanner(System.in).nextDouble();
                if (somma > 0) {
                    this.saldo -= somma;
                    System.out.println("Il tuo nuovo saldo é " + this.saldo);
                    break;
                }
                System.out.println("Si prega di inserire un valore maggiore di 0.");
            } catch (RuntimeException e) {
                System.out.println("Qualcosa é andato storto");
            }
        }
    }

    public void stampaInfo(){
        System.out.println(this.titolare + ", il suo saldo é di " + this.saldo);
    }

}
