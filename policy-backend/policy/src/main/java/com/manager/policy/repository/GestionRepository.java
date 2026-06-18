package com.manager.policy.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.manager.policy.model.Gestion;

@Repository
public interface GestionRepository extends JpaRepository<Gestion, Long> {

    List<Gestion> findByPolizaId(Long polizaId);
    
}
