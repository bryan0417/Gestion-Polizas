package com.manager.policy.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.manager.policy.dto.PolizaDTO;
import com.manager.policy.service.PolizaService;

@RestController
@RequestMapping("/api/polizas")
@CrossOrigin(origins = "*")
public class PolizaController {

    /**
     * Servicio de lógica de negocio para la gestión y operaciones de las pólizas.
     */
    @Autowired
    private PolizaService polizaService;
    
    /**
     * Obtiene el listado completo de las polizas registrados en el sistema
     * @return respuesta HTTP con error o ok con las polizas
     */
    @GetMapping("/allPolizas")
    public ResponseEntity<List<PolizaDTO>> getAllPolizas() {
        List<PolizaDTO> polizas = polizaService.getAllPolizas();

        if (polizas.isEmpty()) {
            return ResponseEntity.noContent().build();
        }

        return ResponseEntity.ok().body(polizas);
    }

    /**
     * Obtiene la poliza registrados en el sistema por el cliente del identificador
     * @return respuesta HTTP con error o ok con la poliza
     */
    @GetMapping("/polizaByCliente")
    public ResponseEntity<List<PolizaDTO>> getPolizasByCliente(@RequestParam Long clienteId) {
        List<PolizaDTO> polizas = polizaService.getPolizasByCliente(clienteId);

        if (polizas.isEmpty()) {
            return ResponseEntity.noContent().build();
        }

        return ResponseEntity.ok().body(polizas);
    }

    /**
     * Registra la poliza en el sistema
     * @return respuesta HTTP creada la poliza
     */
    @PostMapping("/createPoliza")
    public ResponseEntity<PolizaDTO> createPoliza(@RequestBody PolizaDTO polizaDTO, @RequestParam String tipoGestion) {
        PolizaDTO createdPoliza = polizaService.createPoliza(polizaDTO, tipoGestion);
        return ResponseEntity.ok().body(createdPoliza);
    }

    /**
     * Actualiza la poliza en el sistema
     * @return respuesta HTTP
     */
    @PutMapping("/updatePoliza")
    public ResponseEntity<PolizaDTO> updatePoliza(@RequestBody PolizaDTO polizaDTO, @RequestParam String tipoGestion, @RequestParam String resultado) {
        PolizaDTO updatedPoliza = polizaService.updatePoliza(polizaDTO, tipoGestion, resultado);
        return ResponseEntity.ok().body(updatedPoliza);
    }
}
