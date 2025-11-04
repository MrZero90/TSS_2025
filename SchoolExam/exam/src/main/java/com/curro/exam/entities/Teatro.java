package com.curro.exam.entities;

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
    @Column(name = "cod_teatro", columnDefinition = "CHAR(4)")
    private String codTeatro;
    
    @Column(columnDefinition = "VARCHAR(30)")
    private String nome;
    
    @Column(columnDefinition = "INTEGER")
    private int posti;
}
