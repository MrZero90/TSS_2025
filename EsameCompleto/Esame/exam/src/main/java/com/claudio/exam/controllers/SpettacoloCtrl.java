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

import com.claudio.exam.entities.Spettacolo;
import com.claudio.exam.repositories.ISpettacoloRepo;

@RestController
@RequestMapping("api")
@CrossOrigin(origins = "*")
public class SpettacoloCtrl {

    @Autowired
    private ISpettacoloRepo repo;

    @GetMapping("spettacoli")
    public List<Spettacolo> getAll() {
        return repo.findAll();
    }

    @GetMapping("spettacoli/{codSpettacolo}")
    public Spettacolo getByCodCliente(@PathVariable String codSpettacolo) {
        return repo.findById(codSpettacolo).orElse(null);
    }

    @PostMapping("spettacoli/add")
    public ResponseEntity<Spettacolo> save(@RequestBody Spettacolo s) {

        Spettacolo saved = repo.save(s);

        if (saved == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }
        return ResponseEntity.status(HttpStatus.CREATED).body(saved);

    }
}
