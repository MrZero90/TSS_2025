package com.claudio.exam.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "Teatri")
@Data
public class Teatro {

    @Id
    @Column(name = "cod_teatro", columnDefinition = "VARCHAR(4)")
    private String codTeatro;
    
    @Column(name = "nome", columnDefinition = "VARCHAR(30)")
    private String nome;
    
    @Column(name = "indirizzo", columnDefinition = "VARCHAR(30)")
    private String indirizzo;

    @Column(name = "citta", columnDefinition = "VARCHAR(25)")
    private String citta;

    @Column(name = "provincia", columnDefinition = "VARCHAR(2)")
    private String provincia;

    @Column(name = "telefono", columnDefinition = "VARCHAR(14)")
    private String telefono;

    @Column(name = "posti", columnDefinition = "INTEGER")
    private int posti;

}