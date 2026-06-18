package com.manager.policy.model;

import java.time.LocalDate;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "polizas")
public class Poliza {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "cliente_id")
    private Cliente cliente;
    
    private String numeroPoliza;
    
    private String tipo;
    
    private String aseguradora;
    
    private LocalDate fechaInicio;
    
    private LocalDate fechaVencimiento;
    
    private String estado;

    @JsonManagedReference
    @OneToMany(mappedBy = "poliza")
    private List<Gestion> gestiones;
}
