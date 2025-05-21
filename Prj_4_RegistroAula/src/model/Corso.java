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

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getPathNameSavingFile() {
        return pathNameSavingFile;
    }

    public void setPathNameSavingFile(String pathNameSavingFile) {
        this.pathNameSavingFile = pathNameSavingFile;
    }

    public Registro getRegistro() {
        return registro;
    }

    public void setRegistro(Registro registro) {
        this.registro = registro;
    }
}
