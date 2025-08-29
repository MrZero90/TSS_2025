package com.travelworld.api.models;

import java.math.BigDecimal;
import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "viaggi")
public class Viaggio {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(nullable = false)
	private String destinazione;
	
	@Column
	private String descrizione;
	
	@Column(nullable = false)
	private LocalDate dataPartenza;
	
	@Column(nullable = false)
	private LocalDate dataRitorno;
	
	@Column(nullable = false)
	private BigDecimal prezzo;
	
	@Column(nullable = false)
	private Integer postiDisponibili;
	
	@Column
	private String immagine;

	//////////////////////////////////////////////////////

	public Viaggio() {	}

	public Viaggio(String destinazione, String descrizione, LocalDate dataPartenza, LocalDate dataRitorno,
			BigDecimal prezzo, Integer postiDisponibili, String immagine) {
		this.destinazione = destinazione;
		this.descrizione = descrizione;
		this.dataPartenza = dataPartenza;
		this.dataRitorno = dataRitorno;
		this.prezzo = prezzo;
		this.postiDisponibili = postiDisponibili;
		this.immagine = immagine;
	}

	//////////////////////////////////////////////////////

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getDestinazione() {
		return destinazione;
	}

	public void setDestinazione(String destinazione) {
		this.destinazione = destinazione;
	}

	public String getDescrizione() {
		return descrizione;
	}

	public void setDescrizione(String descrizione) {
		this.descrizione = descrizione;
	}

	public LocalDate getDataPartenza() {
		return dataPartenza;
	}

	public void setDataPartenza(LocalDate dataPartenza) {
		this.dataPartenza = dataPartenza;
	}

	public LocalDate getDataRitorno() {
		return dataRitorno;
	}

	public void setDataRitorno(LocalDate dataRitorno) {
		this.dataRitorno = dataRitorno;
	}

	public BigDecimal getPrezzo() {
		return prezzo;
	}

	public void setPrezzo(BigDecimal prezzo) {
		this.prezzo = prezzo;
	}

	public Integer getPostiDisponibili() {
		return postiDisponibili;
	}

	public void setPostiDisponibili(Integer postiDisponibili) {
		this.postiDisponibili = postiDisponibili;
	}

	public String getImmagine() {
		return immagine;
	}

	public void setImmagine(String immagine) {
		this.immagine = immagine;
	}
	

	
	
	//////////////////////////////////////////////////////
}
