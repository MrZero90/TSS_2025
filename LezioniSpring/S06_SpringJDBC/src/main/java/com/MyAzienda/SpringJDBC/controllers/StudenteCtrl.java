package com.MyAzienda.SpringJDBC.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.MyAzienda.SpringJDBC.models.Studente;
import com.MyAzienda.SpringJDBC.services.StudenteService;

@RestController
@RequestMapping("/api/studenti")
public class StudenteCtrl {

	@Autowired
	private StudenteService service;
	
	@GetMapping
	public List<Studente> elencoStudenti(){
		return service.elencoStudentiService();
	}
	
	@GetMapping("/{id}")
	public Studente getById(@PathVariable int id) {
		return service.getStudenteByIdService(id);
	}
	
	@GetMapping("/dettaglio/{id}")
	public ResponseEntity<Studente> studenteByIdRE(@PathVariable int id) {
		Studente result = service.getStudenteByIdService(id);
		if(result == null) {
			return ResponseEntity.notFound().build();
		} else {
			return ResponseEntity.ok(result);
		}
	}
	
	@PostMapping("/crea")
	public boolean studenteCrea(@RequestBody Studente s) {
		return service.createStudenteService(s);
	}
	
	@PostMapping("/dettaglio/crea")
	public ResponseEntity<Studente> studenteCreaRE(@RequestBody Studente s) {
		boolean insertResult = service.createStudenteService(s);
		if(insertResult) {
			return ResponseEntity.ok().build();
		} else {
			return ResponseEntity.unprocessableEntity().build();
		}
	}

	@PutMapping("/update/{id}")
	public ResponseEntity<Studente> studenteUpdate(@PathVariable int id, @RequestBody Studente s) {
		if(id != 0) {
			s.setId(id);
			if(service.updateStudenteService(s)) {
				return ResponseEntity.ok().build();
			}
		}
		return ResponseEntity.badRequest().build();
	}
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<Studente> studenteDelete(@PathVariable int id) {
		if(service.deleteStudenteService(id)) {
			return ResponseEntity.ok().build();			
		} else {
			return ResponseEntity.badRequest().build();
		}
	}

}
