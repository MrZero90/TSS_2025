package com.curro.exam.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "Clienti")
@Data
public class Cliente {

    @Id
    @Column(name = "cod_cliente", columnDefinition = "INTEGER")
    private int codCliente;

    @Column(columnDefinition = "VARCHAR(20)")
    private String cognome; 
    
    @Column(columnDefinition = "VARCHAR(20)")
    private String nome; 
    
    @Column(columnDefinition = "VARCHAR(14)")
    private String telefono; 
    
    @Column(columnDefinition = "VARCHAR(30)")
    private String email; 

}
