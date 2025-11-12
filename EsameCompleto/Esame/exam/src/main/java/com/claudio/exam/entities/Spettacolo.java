package com.claudio.exam.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;
import jakarta.persistence.ForeignKey;


@Entity
@Table(name = "Spettacoli")
@Data
public class Spettacolo {

    @Id
    @Column(name = "cod_spettacolo", columnDefinition = "VARCHAR(4)")
    private String codSpettacolo;
    
    @Column(name = "titolo", columnDefinition = "VARCHAR(40)")
    private String titolo;
    
    @Column(name = "autore", columnDefinition = "VARCHAR(25)")
    private String autore;

    @Column(name = "regista", columnDefinition = "VARCHAR(25)")
    private String regista;
    
    @Column(name = "prezzo", columnDefinition = "DECIMAL(6,2)")
    private float prezzo;
    
    @ManyToOne
    @JoinColumn(name = "cod_teatro", foreignKey = @ForeignKey(name = "fk_spettacolo_teatro"))
    private Teatro teatro;

}