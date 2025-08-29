package com.travelworld.api.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.travelworld.api.models.Prenotazione;

public interface IPrenotazioneRepository extends JpaRepository<Prenotazione, Long>{

}
