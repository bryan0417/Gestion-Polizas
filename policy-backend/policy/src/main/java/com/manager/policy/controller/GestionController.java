package com.manager.policy.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.manager.policy.dto.GestionDTO;
import com.manager.policy.service.GestionService;

@RestController
@RequestMapping("/api/gestiones")
@CrossOrigin(origins = "*")
public class GestionController {
    
    /**
     * Servicio de lógica de negocio para la gestión y operaciones de las gestiones (historiales).
     */
    @Autowired
    private GestionService gestionService;

    /**
     * Obtiene el historial segun el id de la poliza
     * @param polizaId
     * @return
     */
    @GetMapping("/historialByPoliza")
    public ResponseEntity<List<GestionDTO>> getHistorialByPoliza(@RequestParam Long polizaId) {
        List<GestionDTO> gestiones = gestionService.getHistorialByPoliza(polizaId);

        if (gestiones.isEmpty()) {
            return ResponseEntity.noContent().build();
        }

        return ResponseEntity.ok().body(gestiones);
    }
}
