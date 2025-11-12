package com.claudio.exam.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.claudio.exam.entities.Cliente;


@Repository
public interface IClienteRepo extends JpaRepository<Cliente, Integer> {

}
