package conto;
import java.util.ArrayList;
import java.util.Scanner;

public class Banca {

    static private Scanner s = new Scanner(System.in);
    static ArrayList<ContoCorrente> contiAperti = new ArrayList<ContoCorrente>();

    public static void apriConto(){
        ContoCorrente conto = new ContoCorrente();
        System.out.println("Grazie per aver scelto la nostra banca!");
        while(true) {
            System.out.println("Qual é il nome del titolare del conto?");
            System.out.print("=> ");
            String nome = s.nextLine();
            if (nome.length() > 2) {
                conto.titolare = nome;
                break;
            } else {
                System.out.println("Non ci credo che il suo nome sia composto da meno di 3 lettere.");
            }
        }

        do {
            System.out.println("Il suo saldo attuale é di €" + conto.saldo);
            System.out.println("Il deposito minimo per aprire un conto é di €50, quanto vuole versare?");
            System.out.print("=> ");
            double denaro = s.nextDouble();
            s.nextLine();
            if(denaro >= 1) {
                conto.saldo += denaro;
            }else{
                System.out.println("Inserisci un valore di almeno €1");
            }
        } while(conto.saldo < 50);

        contiAperti.add(conto);
        System.out.println("L'apertura del suo conto é andata a buon fine.");
        System.out.println("Il suo numero di conto é '" + conto.numConto + "', le servirá per accedere al suo conto personale");
    }

    public static ContoCorrente accediConto() {
        while (true) {
            try {
                System.out.println("Qual'é il suo numero di conto?");
                System.out.print("=> ");
                int numeroFornito = s.nextInt();
                s.nextLine();

                for (ContoCorrente conto : contiAperti) {
                    if (conto.numConto == numeroFornito) {
                        System.out.println("Numero di conto trovato");
                        return conto;
                    }
                }

                System.out.println("Il numero di conto é errato.");
                System.out.println("Vuole provare di nuovo?");
                System.out.println("1. Si, provo di nuovo.");
                System.out.println("2. No, grazie.");
                int risposta = s.nextInt();
                s.nextLine();
                if (risposta != 1) {
                    System.out.println("Quando lo ricorderá, proveremo di nuovo.");
                    return null;
                }
            } catch (RuntimeException e) {
                System.out.println("Qualcosa é andato storto");
                s.nextLine();
            }
        }
    }

    private static ContoCorrente trovaConto() {
        while (true) {
            int numeroFornito = chiediNumeroConto();
            ContoCorrente conto = cercaConto(numeroFornito);

            if (conto != null) {
                return conto;
            }

            if (!riprovaAccesso()) {
                return null;
            }
        }
    }

    private static int chiediNumeroConto() {
        while(true) {
            try {
                System.out.println("Qual'é il suo numero di conto?");
                System.out.print("=> ");
                int numeroConto = s.nextInt();
                s.nextLine();
                return numeroConto;
            } catch (RuntimeException e) {
                System.out.println("Qualcosa é andato storto");
                s.nextLine();
            }
        }
    }

    private static ContoCorrente cercaConto(int numeroFornito) {
        for (ContoCorrente conto : contiAperti) {
            if (conto.numConto == numeroFornito) {
                return conto;
            }
        }
        System.out.println("Il numero di conto é errato.");
        return null;
    }

    private static boolean riprovaAccesso() {
        System.out.println("Per riprovare premere 0, altrimenti premere 1");
        int scelta = s.nextInt();
        s.nextLine();
        return scelta == 0;
    }

    public static void gestisciConto(ContoCorrente conto){
        boolean finito = false;
        while(!finito){
            try {
                System.out.println("1. Vedi saldo");
                System.out.println("2. Versamento");
                System.out.println("3. Prelievo");
                System.out.println("4. Finito");
                int scelta = s.nextInt();
                s.nextLine();
                switch (scelta) {
                    case 1:
                        conto.stampaInfo();
                        break;
                    case 2:
                        conto.versamento();
                        break;
                    case 3:
                        conto.prelievo();
                        break;
                    case 4:
                        finito = true;
                        System.out.println("Ritorno al menu principale...");
                        break;
                    default:
                        System.out.println("Non ho capito, puoi ripetere?");
                        break;
                }
            } catch (RuntimeException e) {
                System.out.println("Qualcosa éandato storto");
                s.nextLine();
            }
        }


    }


}
