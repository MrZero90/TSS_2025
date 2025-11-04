package com.curro.exam.entities;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import jakarta.persistence.ForeignKey;
import lombok.Data;

@Entity
@Table(name = "Biglietti")
@Data
public class Biglietto {

    @Id
    @Column(columnDefinition = "CHAR(4)")
    private String cod_operazione;

    @ManyToOne
    @JoinColumn(name = "cod_cliente", foreignKey = @ForeignKey(name = "fk_biglietto_cliente"))
    private Cliente cliente; 
    
    @ManyToOne
    @JoinColumn(name = "cod_replica", foreignKey = @ForeignKey(name = "fk_biglietto_replica"))
    private Replica replica; 
    
    @Temporal(TemporalType.TIMESTAMP)
    private Date data_ora; 
    
    @Column(name = "tipo_pagamento", columnDefinition = "VARCHAR(20)")
    private String tipoPagamento; 
    
    @Column(columnDefinition = "INTEGER")
    private Integer quantita; 

}
