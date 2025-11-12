package com.claudio.exam.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.claudio.exam.entities.Replica;
import com.claudio.exam.repositories.IReplicaRepo;

@RestController
@RequestMapping("api")
@CrossOrigin(origins = "*")
public class ReplicaCtrl {

    @Autowired
    private IReplicaRepo repo;

    @GetMapping("/repliche")
    public List<Replica> getAll() {
        return repo.findAll();
    }

    @GetMapping("/repliche/{codReplica}")
    public Replica getByCodCliente(@PathVariable String codReplica) {
        return repo.findById(codReplica).orElse(null);
    }

    @GetMapping("/repliche/spettacolo/{codSpettacolo}")
    public List<Replica> getReplicheBySpettacolo(@PathVariable String codSpettacolo) {
        return repo.findBySpettacolo_CodSpettacolo(codSpettacolo);
    }

    @PostMapping("/repliche/add")
    public ResponseEntity<Replica> save(@RequestBody Replica r) {

        Replica saved = repo.save(r);

        if (saved == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }
        return ResponseEntity.status(HttpStatus.CREATED).body(saved);

    }
}
