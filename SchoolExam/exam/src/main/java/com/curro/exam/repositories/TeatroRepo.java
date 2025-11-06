package com.curro.exam.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.curro.exam.entities.Teatro;

@Repository
public interface TeatroRepo extends JpaRepository<Teatro, String>{
}
