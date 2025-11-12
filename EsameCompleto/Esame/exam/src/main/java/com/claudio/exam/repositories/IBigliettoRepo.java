package com.claudio.exam.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.claudio.exam.entities.Biglietto;


@Repository
public interface IBigliettoRepo extends JpaRepository<Biglietto, String> {

    List<Biglietto> findByCliente_CodCliente(Integer codCliente);

    @Query("SELECT COALESCE(SUM(b.quantita), 0) FROM Biglietto b WHERE b.replica.codReplica = :codReplica")
    Integer countBigliettiVendutiByReplica(@Param("codReplica") String codReplica);

}
