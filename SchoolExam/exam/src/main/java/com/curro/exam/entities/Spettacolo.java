package com.curro.exam.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.persistence.ForeignKey;
import lombok.Data;

@Entity
@Table(name = "Spettacoli")
@Data
public class Spettacolo {

    @Id
    @Column(name = "cod_spettacolo", columnDefinition = "CHAR(4)")
    private String codSpettacolo;
    
    @Column(columnDefinition = "VARCHAR(40)")
    private String titolo;
    
    @Column(columnDefinition = "VARCHAR(25)")
    private String autore;

    @Column(columnDefinition = "VARCHAR(25)")
    private String regista;
    
    @Column(columnDefinition = "DECIMAL(6,2)")
    private float prezzo;

    @ManyToOne
    @JoinColumn(name = "cod_teatro", foreignKey = @ForeignKey(name = "fk_spettacolo_teatro"))
    private Teatro teatro;
}
