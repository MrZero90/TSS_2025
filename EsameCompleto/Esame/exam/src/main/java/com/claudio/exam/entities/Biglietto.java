package com.claudio.exam.entities;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;
import jakarta.persistence.ForeignKey;


@Entity
@Table(name = "Biglietti")
@Data
public class Biglietto {

    @Id
    @Column(name = "cod_operazione", columnDefinition = "VARCHAR(4)")
    private String codOperazione;
    
    @ManyToOne
    @JoinColumn(name = "cod_cliente", foreignKey = @ForeignKey(name = "fk_biglietto_cliente"))
    private Cliente cliente;
    
    @ManyToOne
    @JoinColumn(name = "cod_replica", foreignKey = @ForeignKey(name = "fk_biglietto_replica"))
    private Replica replica;

    @Column(name = "data", columnDefinition = "DATE")
    private LocalDate data;
    
    @Column(name = "tipo_pagamento", columnDefinition = "VARCHAR(20)")
    private String tipoPagamento;

    @Column(name = "quantita", columnDefinition = "INTEGER")
    private Integer quantita;

}