package com.claudio.exam.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "Clienti")
@Data
public class Cliente {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "codCliente")
    private int codCliente;
    
    @Column(name = "cognome", columnDefinition = "VARCHAR(20)")
    private String cognome;

    @Column(name = "nome", columnDefinition = "VARCHAR(20)")
    private String nome;

    @Column(name = "telefono", columnDefinition = "VARCHAR(14)")
    private String telefono;

    @Column(name = "email", columnDefinition = "VARCHAR(30)")
    private String email;

}