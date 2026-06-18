package com.manager.policy.dto;

import java.time.LocalDate;

import com.manager.policy.model.Poliza;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * DTO para la transferencias de datos entre back y front
 */

@Data
@AllArgsConstructor
@NoArgsConstructor
public class GestionDTO {
    
    private Long id;

    private Poliza poliza;

    private LocalDate fechaGestion;
    
    private String tipoGestion;
    
    private boolean gestionado;
    
    private String resultado;
    
    private LocalDate fechaProximaAccion;
}
