package com.curro.exam.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.curro.exam.entities.Spettacolo;

@Repository
public interface SpettacoloRepo extends JpaRepository<Spettacolo, String>{
}
