import conto.Banca;
import conto.ContoCorrente;

import java.util.Scanner;


public class Main {
    static Scanner s = new Scanner(System.in);

    public static void main(String[] args) {
        boolean operazioneTerminata = false;
        int scelta;
        System.out.println("Benvenuto alla BestBank, come posso aiutarti?");
        do {
            System.out.println("1. Apri nuovo conto");
            System.out.println("2. Accedi conto personale");
            System.out.println("3. Arrivederci");
            scelta = s.nextInt();
            s.nextLine();

            switch(scelta){
                case 1:
                    Banca.apriConto();
                    break;
                case 2:
                    ContoCorrente contoPersonale = Banca.accediConto();
                    if (contoPersonale != null) {
                        Banca.gestisciConto(contoPersonale);
                    }
                    break;
                case 3:
                    operazioneTerminata = true;
                    System.out.println("Grazie ancora per aver scelto BestBank e buona giornata");
                    break;
                default:
                    System.out.println("Non ho capito, puoi ripetere?");
                    break;
            }
        }while(!operazioneTerminata);

    }

}