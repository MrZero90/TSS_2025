package com.curro.exam.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.curro.exam.entities.Replica;

@Repository
public interface ReplicaRepo extends JpaRepository<Replica, String>{

    List<Replica> findBySpettacolo_CodSpettacolo(String codSpettacolo);

}
