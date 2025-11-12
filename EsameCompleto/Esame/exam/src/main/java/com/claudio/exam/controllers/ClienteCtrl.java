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

import com.claudio.exam.entities.Cliente;
import com.claudio.exam.repositories.IClienteRepo;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class ClienteCtrl {

    @Autowired
    private IClienteRepo repo;

    @GetMapping("/clienti")
    public List<Cliente> getAll() {
        return repo.findAll();
    }

    @GetMapping("/clienti/{codCliente}")
    public Cliente getByCodCliente(@PathVariable int codCliente) {
        return repo.findById(codCliente).orElse(null);
    }


    @PostMapping("/clienti/add")
    public ResponseEntity<Cliente> save(@RequestBody Cliente c) {

        Cliente saved = repo.save(c);

        if (saved == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }
        return ResponseEntity.status(HttpStatus.CREATED).body(saved);
    }


}
