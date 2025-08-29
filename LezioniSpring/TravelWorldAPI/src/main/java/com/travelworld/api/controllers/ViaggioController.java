package com.travelworld.api.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.travelworld.api.models.Viaggio;
import com.travelworld.api.services.ViaggioService;

@RestController
@RequestMapping("api/viaggi")
public class ViaggioController {

	@Autowired
	private ViaggioService service;
	
	@GetMapping
	public List<Viaggio> findAll(){
		return service.findAll();
	}
}
