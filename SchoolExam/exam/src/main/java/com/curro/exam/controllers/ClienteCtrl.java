package com.curro.exam.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.curro.exam.entities.Cliente;
import com.curro.exam.repositories.ClienteRepo;


@RestController
@RequestMapping("api/clienti")
@CrossOrigin(origins = {"http://127.0.0.1:5500", "http://localhost:5500"})
public class ClienteCtrl {

    @Autowired
    ClienteRepo repo;
    
    @GetMapping
    public List<Cliente> getAll() {
        return repo.findAll();
    }
    
}
