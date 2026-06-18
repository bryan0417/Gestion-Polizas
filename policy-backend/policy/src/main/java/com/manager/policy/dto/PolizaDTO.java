package com.manager.policy.dto;

import java.time.LocalDate;
import java.util.List;

import com.manager.policy.model.Cliente;
import com.manager.policy.model.Gestion;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * DTO para la transferencias de datos entre back y front
 */

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PolizaDTO {
    private Long id;

    private Cliente cliente;
    
    private String numeroPoliza;
    
    private String tipo;
    
    private String aseguradora;
    
    private LocalDate fechaInicio;
    
    private LocalDate fechaVencimiento;
    
    private String estado;

    private List<Gestion> gestiones;
}
