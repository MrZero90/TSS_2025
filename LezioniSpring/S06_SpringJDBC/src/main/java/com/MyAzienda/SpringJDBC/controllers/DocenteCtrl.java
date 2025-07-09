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

import com.MyAzienda.SpringJDBC.models.Docente;
import com.MyAzienda.SpringJDBC.services.DocenteService;


@RestController
@RequestMapping("/api/docenti")
public class DocenteCtrl {

	@Autowired
	private DocenteService service;
	
	@GetMapping
	public List<Docente> elencoStudenti(){
		return service.elencoDocentiService();
	}
	
	@GetMapping("{id}")
	public Docente getById(@PathVariable int id) {
		return service.getDocenteByIdService(id);
	}

	@GetMapping("/dettaglio/{id}")
	public ResponseEntity<Docente> docenteByIdRE(@PathVariable int id) {
		Docente result = service.getDocenteByIdService(id);
		if(result == null) {
			return ResponseEntity.notFound().build();
		} else {
			return ResponseEntity.ok(result);
		}
	}
	
	@PostMapping("/crea")
	public boolean docenteCrea(@RequestBody Docente d) {
		return service.createDocenteService(d);
	}
	
	@PostMapping("/dettaglio/crea")
	public ResponseEntity<Docente> docenteCreaRE(@RequestBody Docente d) {
		boolean insertResult = service.createDocenteService(d);
		if(insertResult) {
			return ResponseEntity.ok().build();
		} else {
			return ResponseEntity.unprocessableEntity().build();
		}
	}
	
	@PutMapping("/update/{id}")
	public ResponseEntity<Docente> docenteUpdate(@PathVariable int id, @RequestBody Docente d) {
		if(id != 0) {
			d.setId(id);
			if(service.updateDocenteService(d)) {
				return ResponseEntity.ok().build();
			}
		}
		return ResponseEntity.badRequest().build();
	}
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<Docente> docenteDelete(@PathVariable int id) {
		if(service.deleteDocenteService(id)) {
			return ResponseEntity.ok().build();			
		} else {
			return ResponseEntity.badRequest().build();
		}
	}
}

