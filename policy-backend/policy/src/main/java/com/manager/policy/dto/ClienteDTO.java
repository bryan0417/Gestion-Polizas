package com.manager.policy.dto;

import java.time.LocalDate;
import java.util.List;

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
public class ClienteDTO {
    private Long id;
    
    private String nombre;
    
    private String documento;
    
    private String celular;
    
    private String correo;
    
    private LocalDate fechaCreacion;

    private List<Poliza> polizas;
    
}
