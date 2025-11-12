package com.claudio.exam.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.claudio.exam.entities.Replica;


@Repository
public interface IReplicaRepo extends JpaRepository<Replica, String> {

    List<Replica> findBySpettacolo_CodSpettacolo(String codSpettacolo);
}
