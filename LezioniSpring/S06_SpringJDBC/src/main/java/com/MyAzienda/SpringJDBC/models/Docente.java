package com.MyAzienda.SpringJDBC.models;

public class Docente extends Persona{
	
	private String materia;

	public Docente() {
		super();
	}
	
	public Docente(String nome, String cognome, String materia) {
		super(nome, cognome);
		this.materia = materia;
	}
	

	@Override
	public String toString() {
		return "Docente [materia=" + materia + "]";
	}

	public String getMateria() {
		return materia;
	}

	public void setMateria(String materia) {
		this.materia = materia;
	}
	
	
}
