package com.travelworld.api.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.travelworld.api.models.Viaggio;

public interface IViaggioRepository extends JpaRepository<Viaggio, Long> {

}
