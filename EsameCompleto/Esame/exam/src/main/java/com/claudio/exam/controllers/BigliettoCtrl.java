package com.claudio.exam.controllers;

import java.time.LocalDate;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.claudio.exam.entities.Biglietto;
import com.claudio.exam.entities.Cliente;
import com.claudio.exam.entities.Replica;
import com.claudio.exam.repositories.IBigliettoRepo;
import com.claudio.exam.repositories.IClienteRepo;
import com.claudio.exam.repositories.IReplicaRepo;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class BigliettoCtrl {

    @Autowired
    private IBigliettoRepo repo;
    
    @Autowired
    private IClienteRepo clienteRepo;
    
    @Autowired
    private IReplicaRepo replicaRepo;

    @GetMapping("/biglietti")
    public List<Biglietto> getAll() {
        return repo.findAll();
    }

    @GetMapping("/biglietti/cliente/{codCliente}")
    public List<Biglietto> getBigliettiByCliente(@PathVariable Integer codCliente) {
        return repo.findByCliente_CodCliente(codCliente);
    }

    // ⚠️ NUOVO: Endpoint per verificare disponibilità
    @GetMapping("/biglietti/disponibilita/{codReplica}")
    public ResponseEntity<DisponibilitaResponse> getDisponibilita(@PathVariable String codReplica) {
        try {
            Replica replica = replicaRepo.findById(codReplica)
                .orElseThrow(() -> new RuntimeException("Replica non trovata"));
            
            Integer postiTeatro = replica.getSpettacolo().getTeatro().getPosti();
            Integer postiVenduti = repo.countBigliettiVendutiByReplica(codReplica);
            Integer postiDisponibili = postiTeatro - postiVenduti;
            
            DisponibilitaResponse response = new DisponibilitaResponse(
                postiTeatro, 
                postiVenduti, 
                postiDisponibili
            );
            
            return ResponseEntity.ok(response);
            
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @PostMapping("/biglietti/add")
    public ResponseEntity<?> save(@RequestBody Biglietto b) {
        try {
            Cliente cliente = clienteRepo.findById(b.getCliente().getCodCliente())
                .orElseThrow(() -> new RuntimeException("Cliente non trovato"));
            
            Replica replica = replicaRepo.findById(b.getReplica().getCodReplica())
                .orElseThrow(() -> new RuntimeException("Replica non trovata"));
            
            // ⚠️ CONTROLLO OVERBOOKING
            Integer postiTeatro = replica.getSpettacolo().getTeatro().getPosti();
            Integer postiVenduti = repo.countBigliettiVendutiByReplica(replica.getCodReplica());
            Integer postiDisponibili = postiTeatro - postiVenduti;
            
            if (b.getQuantita() > postiDisponibili) {
                // ⚠️ Non ci sono abbastanza posti
                return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(new ErrorResponse("Posti insufficienti. Disponibili: " + postiDisponibili));
            }
            
            b.setCliente(cliente);
            b.setReplica(replica);
            
            String codOperazione = generaCodiceOperazione();
            b.setCodOperazione(codOperazione);
            
            b.setData(LocalDate.now());
            
            if (b.getQuantita() == null) {
                b.setQuantita(1);
            }
            
            Biglietto saved = repo.save(b);
            return ResponseEntity.status(HttpStatus.CREATED).body(saved);
            
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(new ErrorResponse("Errore interno del server"));
        }
    }
    
    private String generaCodiceOperazione() {
        long count = repo.count();
        return String.format("B%03d", count + 1);
    }
    
    // ⚠️ DTO per risposta disponibilità
    static class DisponibilitaResponse {
        public Integer postiTotali;
        public Integer postiVenduti;
        public Integer postiDisponibili;
        
        public DisponibilitaResponse(Integer postiTotali, Integer postiVenduti, Integer postiDisponibili) {
            this.postiTotali = postiTotali;
            this.postiVenduti = postiVenduti;
            this.postiDisponibili = postiDisponibili;
        }
    }
    
    // ⚠️ DTO per risposta errore
    static class ErrorResponse {
        public String error;
        
        public ErrorResponse(String error) {
            this.error = error;
        }
    }
}
