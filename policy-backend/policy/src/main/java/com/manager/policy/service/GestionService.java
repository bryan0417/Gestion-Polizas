package com.manager.policy.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.manager.policy.dto.GestionDTO;
import com.manager.policy.model.Gestion;
import com.manager.policy.repository.GestionRepository;

@Service
public class GestionService {

    @Autowired
    private GestionRepository gestionRepository;

    public List<GestionDTO> getAllGestiones() {
        List<GestionDTO> gestiones = gestionRepository.findAll()
            .stream()
            .map(gestion -> new GestionDTO(
                    gestion.getId(),
                    gestion.getPoliza(),
                    gestion.getFechaGestion(),
                    gestion.getTipoGestion(),
                    gestion.isGestionado(),
                    gestion.getResultado(),
                    gestion.getFechaProximaAccion()
            ))
            .toList();
        return gestiones;
    }

    public List<GestionDTO> getHistorialByPoliza(Long polizaId) {
        return gestionRepository.findByPolizaId(polizaId)
                .stream()
                .map(gestion -> new GestionDTO(
                        gestion.getId(),
                        gestion.getPoliza(),
                        gestion.getFechaGestion(),
                        gestion.getTipoGestion(),
                        gestion.isGestionado(),
                        gestion.getResultado(),
                        gestion.getFechaProximaAccion()
                ))
                .toList();
    }

    public GestionDTO createGestion(GestionDTO gestionDTO) {
        Gestion gestion = new Gestion(
            null,
            gestionDTO.getPoliza(),
            gestionDTO.getFechaGestion(),
            gestionDTO.getTipoGestion(),
            gestionDTO.isGestionado(),
            gestionDTO.getResultado(),
            gestionDTO.getFechaProximaAccion()
        );

        Gestion gestionGuardada = gestionRepository.save(gestion);

        return new GestionDTO(
            gestionGuardada.getId(),
            gestionGuardada.getPoliza(),
            gestionGuardada.getFechaGestion(),
            gestionGuardada.getTipoGestion(),
            gestionGuardada.isGestionado(),
            gestionGuardada.getResultado(),
            gestionGuardada.getFechaProximaAccion()
            );
        }
    
}
