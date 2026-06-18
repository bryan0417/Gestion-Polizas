package com.manager.policy.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.manager.policy.dto.ClienteDTO;
import com.manager.policy.service.ClienteService;

@RestController
@RequestMapping("/api/clientes")
@CrossOrigin(origins = "*")
public class ClienteController {
    
    /**
     * Servicio de lógica de negocio para la gestión y operaciones de los clientes.
     */
    @Autowired
    private ClienteService clienteService;

    /**
     * Obtiene el listado completo de los clientes registrados en el sistema
     * @return respuesta HTTP con error o ok con los clientes
     */
    @GetMapping("/allClients")
    public ResponseEntity<?> getAllClientes() {
        List<ClienteDTO> clientes = clienteService.getAllClientes();

        if (clientes.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NO_CONTENT).body("Clientes no encontrado");
        }

        return ResponseEntity.ok().body(clientes);
    }

    /**
     * Obtiene el cliente registrados en el sistema por el identificador
     * @return respuesta HTTP con error o ok con el cliente
     */
    @GetMapping("/client")
    public ResponseEntity<?> getClienteById(@RequestParam Long id) {
        ClienteDTO cliente = clienteService.getClienteById(id);

        if (cliente == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Cliente no encontrado");
        }

        return ResponseEntity.ok().body(cliente);
    }

    /**
     * Registra el cliente en el sistema
     * @return respuesta HTTP creado el cliente
     */
    @PostMapping("/createClient")
    public ResponseEntity<ClienteDTO> createCliente(@RequestBody ClienteDTO clienteDTO) {
        ClienteDTO createdCliente = clienteService.createCliente(clienteDTO);
        return ResponseEntity.ok().body(createdCliente);
    }

    /**
     * Actualiza el cliente en el sistema
     * @return respuesta HTTP
     */
    @PutMapping("/updateClient")
    public ResponseEntity<ClienteDTO> updateCliente(@RequestBody ClienteDTO clienteDTO) {
        ClienteDTO updatedCliente = clienteService.updateCliente(clienteDTO);
        return ResponseEntity.ok().body(updatedCliente);
    }

}
