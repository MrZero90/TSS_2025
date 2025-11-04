package com.curro.exam.entities;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.ForeignKey;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import lombok.Data;

@Entity
@Table(name = "Repliche")
@Data
public class Replica {

    @Id
    @Column(name = "cod_replica",columnDefinition = "CHAR(4)")
    private String codReplica;

    @ManyToOne
    @JoinColumn(name = "cod_spettacolo", foreignKey = @ForeignKey(name = "fk_replica_spettacolo"))
    private Spettacolo spettacolo;

    @Column(name = "data_replica")
    @Temporal(TemporalType.TIMESTAMP)
    private Date dataReplica;

}
