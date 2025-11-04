package com.curro.exam.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.curro.exam.entities.Cliente;

@Repository
public interface ClienteRepo extends JpaRepository<Cliente, Integer>{
}
