package com.curro.exam.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.curro.exam.entities.Spettacolo;
import com.curro.exam.repositories.SpettacoloRepo;

@RestController
@RequestMapping("api/spettacoli")
@CrossOrigin(origins = {"http://127.0.0.1:5500", "http://localhost:5500"})
public class SpettacoloCtrl {

    @Autowired
    SpettacoloRepo repo;
    
    @GetMapping
    public List<Spettacolo> getAll() {
        return repo.findAll();
    }
}
