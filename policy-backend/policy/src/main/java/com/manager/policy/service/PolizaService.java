package com.manager.policy.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.manager.policy.dto.PolizaDTO;
import com.manager.policy.model.Gestion;
import com.manager.policy.model.Poliza;
import com.manager.policy.repository.GestionRepository;
import com.manager.policy.repository.PolizaRepository;

@Service
public class PolizaService {
    

    @Autowired
    private PolizaRepository polizaRepository;

    @Autowired
    private GestionRepository gestionRepository;

    public List<PolizaDTO> getAllPolizas() {
        List<PolizaDTO> polizas = polizaRepository.findAll()
                .stream()
                .map(poliza -> new PolizaDTO(
                        poliza.getId(),
                        poliza.getCliente(),
                        poliza.getNumeroPoliza(),
                        poliza.getTipo(),
                        poliza.getAseguradora(),
                        poliza.getFechaInicio(),
                        poliza.getFechaVencimiento(),
                        poliza.getEstado(),
                        poliza.getGestiones()
                ))
                .toList();

        return polizas;
    }

    public PolizaDTO getPolizaById(Long id) {
        return polizaRepository.findById(id)
                .map(poliza -> new PolizaDTO(
                        poliza.getId(),
                        poliza.getCliente(),
                        poliza.getNumeroPoliza(),
                        poliza.getTipo(),
                        poliza.getAseguradora(),
                        poliza.getFechaInicio(),
                        poliza.getFechaVencimiento(),
                        poliza.getEstado(),
                        poliza.getGestiones()
                ))
                .orElse(null);
    }

    public List<PolizaDTO> getPolizasByCliente(Long clienteId) {
        return polizaRepository.findByClienteId(clienteId)
                .stream()
                .map(poliza -> new PolizaDTO(
                        poliza.getId(),
                        poliza.getCliente(),
                        poliza.getNumeroPoliza(),
                        poliza.getTipo(),
                        poliza.getAseguradora(),
                        poliza.getFechaInicio(),
                        poliza.getFechaVencimiento(),
                        poliza.getEstado(),
                        poliza.getGestiones()
                ))
                .toList();
    }

    public PolizaDTO createPoliza(PolizaDTO polizaDTO, String tipoGestion) {
        Poliza poliza = polizaRepository.save(new Poliza(
                null,
                polizaDTO.getCliente(),
                polizaDTO.getNumeroPoliza(),
                polizaDTO.getTipo(),
                polizaDTO.getAseguradora(),
                polizaDTO.getFechaInicio(),
                polizaDTO.getFechaVencimiento(),
                polizaDTO.getEstado(),
                polizaDTO.getGestiones()
        ));

        LocalDate hoy = LocalDate.now();
        String resultado = "Póliza creada";

        gestionRepository.save(new Gestion(
                null,
                poliza,
                hoy,
                tipoGestion,
                true,
                resultado,
                poliza.getFechaVencimiento()
        ));

        return new PolizaDTO(
                poliza.getId(),
                poliza.getCliente(),
                poliza.getNumeroPoliza(),
                poliza.getTipo(),
                poliza.getAseguradora(),
                poliza.getFechaInicio(),
                poliza.getFechaVencimiento(),
                poliza.getEstado(),
                poliza.getGestiones()
        );
    }

    public PolizaDTO updatePoliza(PolizaDTO polizaDTO, String tipoGestion, String resultado) {
        Poliza poliza = polizaRepository.findById(polizaDTO.getId())
                .orElseThrow(() -> new RuntimeException("Poliza no encontrada"));

        poliza.setNumeroPoliza(polizaDTO.getNumeroPoliza());
        poliza.setTipo(polizaDTO.getTipo());
        poliza.setAseguradora(polizaDTO.getAseguradora());
        poliza.setFechaInicio(polizaDTO.getFechaInicio());
        poliza.setFechaVencimiento(polizaDTO.getFechaVencimiento());
        poliza.setEstado(polizaDTO.getEstado());
        poliza.setGestiones(polizaDTO.getGestiones());

        Poliza updatedPoliza = polizaRepository.save(poliza);

        LocalDate hoy = LocalDate.now();
        gestionRepository.save(new Gestion(
                null,
                poliza,
                hoy,
                tipoGestion,
                true,
                resultado,
                poliza.getFechaVencimiento()
        ));

        return new PolizaDTO(
                updatedPoliza.getId(),
                updatedPoliza.getCliente(),
                updatedPoliza.getNumeroPoliza(),
                updatedPoliza.getTipo(),
                updatedPoliza.getAseguradora(),
                updatedPoliza.getFechaInicio(),
                updatedPoliza.getFechaVencimiento(),
                updatedPoliza.getEstado(),
                updatedPoliza.getGestiones()
        );
    }
}
