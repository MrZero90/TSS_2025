package com.curro.exam.controllers;

import java.util.List;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.curro.exam.entities.Biglietto;
import com.curro.exam.repositories.BigliettoRepo;

@RestController
@RequestMapping("api/biglietti")
@CrossOrigin(origins = {"http://127.0.0.1:5500", "http://localhost:5500"})
public class BigliettoCtrl {

    @Autowired
    BigliettoRepo repo;

    @GetMapping
    public List<Biglietto> getAll() {
        return repo.findAll();
    }

        
    @PostMapping("add")
    public ResponseEntity<Biglietto> addBiglietto(@RequestBody Biglietto biglietto) {
        
        Random r = new Random();
        do {
            biglietto.setCod_operazione(String.format("B%03d", r.nextInt(1000)));
        } while (repo.existsById(biglietto.getCod_operazione()));

        Biglietto saved = repo.save(biglietto);
        return ResponseEntity.status(HttpStatus.CREATED).body(saved);
    }
}
