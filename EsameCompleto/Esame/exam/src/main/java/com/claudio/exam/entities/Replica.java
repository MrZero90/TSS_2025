package com.claudio.exam.entities;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;
import jakarta.persistence.ForeignKey;


@Entity
@Table(name = "Repliche")
@Data
public class Replica {

    @Id
    @Column(name = "cod_replica", columnDefinition = "VARCHAR(4)")
    private String codReplica;
    
    @ManyToOne
    @JoinColumn(name = "cod_spettacolo", foreignKey = @ForeignKey(name = "fk_replica_spettacolo"))
    private Spettacolo spettacolo;
    
    @Column(name = "data_replica", columnDefinition = "DATE")
    private Date dataReplica;

}