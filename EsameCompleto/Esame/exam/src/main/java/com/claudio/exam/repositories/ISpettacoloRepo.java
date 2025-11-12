package com.claudio.exam.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.claudio.exam.entities.Spettacolo;


@Repository
public interface ISpettacoloRepo extends JpaRepository<Spettacolo, String> {

}
