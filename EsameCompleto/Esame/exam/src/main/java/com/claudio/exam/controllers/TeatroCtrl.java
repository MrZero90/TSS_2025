package com.claudio.exam.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import com.claudio.exam.entities.Teatro;
import com.claudio.exam.repositories.ITeatroRepo;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;



@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class TeatroCtrl {

    @Autowired
    private ITeatroRepo repo;

    @GetMapping("teatri")
    public List<Teatro> getAll() {
        return repo.findAll();
    }

    @PostMapping("teatri/add")    
    public ResponseEntity<Teatro> save(@RequestBody Teatro t) {

        Teatro saved = repo.save(t);

        if (saved == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }
        return ResponseEntity.status(HttpStatus.CREATED).body(saved);
        
    }
}
