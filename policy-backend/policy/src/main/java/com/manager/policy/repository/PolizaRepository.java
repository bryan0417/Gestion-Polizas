package com.manager.policy.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.manager.policy.model.Poliza;

@Repository
public interface PolizaRepository extends JpaRepository<Poliza, Long> {

    List<Poliza> findByClienteId(Long clienteId);
    
}
