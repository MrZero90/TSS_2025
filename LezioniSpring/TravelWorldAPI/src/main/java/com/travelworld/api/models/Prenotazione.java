package com.travelworld.api.models;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "prenotazioni")
public class Prenotazione {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@ManyToOne
	@JoinColumn(name = "viaggioId")
	private Viaggio viaggio;

	@Column(nullable = false)
	private String nomeCliente;
	
	@Column(nullable = false)
	private String emailCliente;
	
	@Column(nullable = false)
	private Integer numeroPersone;
	
	@Column
	private LocalDateTime dataPrenotazione;
<>
	//////////////////////////////////////////////////////

	public Prenotazione() {
		super();
	}

	public Prenotazione(Viaggio viaggio, String nomeCliente, String emailCliente, Integer numeroPersone) {
		this.viaggio = viaggio;
		this.nomeCliente = nomeCliente;
		this.emailCliente = emailCliente;
		this.numeroPersone = numeroPersone;
		this.dataPrenotazione = LocalDateTime.now();
	}

	//////////////////////////////////////////////////////

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Viaggio getViaggio() {
		return viaggio;
	}

	public void setViaggio(Viaggio viaggio) {
		this.viaggio = viaggio;
	}

	public String getNomeCliente() {
		return nomeCliente;
	}

	public void setNomeCliente(String nomeCliente) {
		this.nomeCliente = nomeCliente;
	}

	public String getEmailCliente() {
		return emailCliente;
	}

	public void setEmailCliente(String emailCliente) {
		this.emailCliente = emailCliente;
	}

	public Integer getNumeroPersone() {
		return numeroPersone;
	}

	public void setNumeroPersone(Integer numeroPersone) {
		this.numeroPersone = numeroPersone;
	}

	public LocalDateTime getDataPrenotazione() {
		return dataPrenotazione;
	}

	public void setDataPrenotazione(LocalDateTime dataPrenotazione) {
		this.dataPrenotazione = dataPrenotazione;
	}

	//////////////////////////////////////////////////////

	
	
	
}
