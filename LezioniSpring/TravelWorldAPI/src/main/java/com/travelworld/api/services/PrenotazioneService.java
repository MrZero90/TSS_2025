package com.travelworld.api.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.travelworld.api.models.Prenotazione;
import com.travelworld.api.repositories.IPrenotazioneRepository;

@Service
public class PrenotazioneService {
	
	@Autowired
	private IPrenotazioneRepository repo;
	
	public List<Prenotazione> findAll(){
		return repo.findAll();
	}

}
