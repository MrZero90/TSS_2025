package com.curro.exam.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.curro.exam.entities.Biglietto;

@Repository
public interface BigliettoRepo extends JpaRepository<Biglietto, String>{
}
