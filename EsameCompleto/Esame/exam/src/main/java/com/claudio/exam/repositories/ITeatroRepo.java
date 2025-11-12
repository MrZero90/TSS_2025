package com.claudio.exam.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.claudio.exam.entities.Teatro;


@Repository
public interface ITeatroRepo extends JpaRepository<Teatro, String> {

}
