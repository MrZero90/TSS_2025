package com.travelworld.api.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.travelworld.api.models.Prenotazione;
import com.travelworld.api.services.PrenotazioneService;

@RestController
@RequestMapping("api/prenotazioni")
public class PrenotazioneController {

	@Autowired
	private PrenotazioneService service;
	
	@GetMapping
	public List<Prenotazione> findAll(){
		return service.findAll();
	}
}
