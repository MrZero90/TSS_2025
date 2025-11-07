package com.curro.exam.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;


import com.curro.exam.entities.Teatro;
import com.curro.exam.repositories.TeatroRepo;


@RestController
@RequestMapping("api/teatri")
@CrossOrigin(origins = {"http://127.0.0.1:5500", "http://localhost:5500"})
public class TeatroCtrl {

    @Autowired
    TeatroRepo repo;

    @GetMapping
    public List<Teatro> getAll() {
        return repo.findAll();
    }
    

    
}
