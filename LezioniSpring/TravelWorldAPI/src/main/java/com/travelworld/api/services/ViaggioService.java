package com.travelworld.api.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.travelworld.api.models.Viaggio;
import com.travelworld.api.repositories.IViaggioRepository;

@Service
public class ViaggioService {

	@Autowired
	private IViaggioRepository repo;
	
	public List<Viaggio> findAll(){
		return repo.findAll();
	}
}
