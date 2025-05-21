package model;

import java.io.File;

public class Corso {
    private String nome;
    private String pathNameSavingFile;
    private Registro registro = new Registro();

    public Corso(){

    }

    public Corso(String nome, String pathNameSavingFile, Registro registro){
        this.nome = nome;
        this.pathNameSavingFile = pathNameSavingFile;
        this.registro = registro;
    }

}
