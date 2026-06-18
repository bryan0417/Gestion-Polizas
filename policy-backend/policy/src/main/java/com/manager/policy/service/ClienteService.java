package com.manager.policy.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.manager.policy.dto.ClienteDTO;
import com.manager.policy.model.Cliente;
import com.manager.policy.repository.ClienteRepository;


@Service
public class ClienteService {

    @Autowired
    private ClienteRepository clienteRepository;

    public List<ClienteDTO> getAllClientes() {
        List<ClienteDTO> clientes = clienteRepository.findAll()
                .stream()
                .map(cliente -> new ClienteDTO(
                        cliente.getId(),
                        cliente.getNombre(),
                        cliente.getDocumento(),
                        cliente.getCelular(),
                        cliente.getCorreo(),
                        cliente.getFechaCreacion(),
                        cliente.getPolizas()
                ))
                .toList();

        return clientes;
    }

    public ClienteDTO getClienteById(Long id) {
        return clienteRepository.findById(id)
                .map(cliente -> new ClienteDTO(
                        cliente.getId(),
                        cliente.getNombre(),
                        cliente.getDocumento(),
                        cliente.getCelular(),
                        cliente.getCorreo(),
                        cliente.getFechaCreacion(),
                        cliente.getPolizas()
                ))
                .orElse(null);
    }

    public ClienteDTO createCliente(ClienteDTO clienteDTO) {
        Cliente cliente = clienteRepository.save(new Cliente(
                null,
                clienteDTO.getNombre(),
                clienteDTO.getDocumento(),
                clienteDTO.getCelular(),
                clienteDTO.getCorreo(),
                clienteDTO.getFechaCreacion(),
                clienteDTO.getPolizas()
        ));

        return new ClienteDTO(
                cliente.getId(),
                cliente.getNombre(),
                cliente.getDocumento(),
                cliente.getCelular(),
                cliente.getCorreo(),
                cliente.getFechaCreacion(),
                cliente.getPolizas()
        );
    }

    public ClienteDTO updateCliente(ClienteDTO clienteDTO) {
        Cliente cliente = clienteRepository.findById(clienteDTO.getId())
                .orElseThrow(() -> new RuntimeException("Cliente no encontrado"));

        cliente.setNombre(clienteDTO.getNombre());
        cliente.setDocumento(clienteDTO.getDocumento());
        cliente.setCelular(clienteDTO.getCelular());
        cliente.setCorreo(clienteDTO.getCorreo());
        cliente.setFechaCreacion(clienteDTO.getFechaCreacion());
        cliente.setPolizas(clienteDTO.getPolizas());

        Cliente updatedCliente = clienteRepository.save(cliente);

        return new ClienteDTO(
                updatedCliente.getId(),
                updatedCliente.getNombre(),
                updatedCliente.getDocumento(),
                updatedCliente.getCelular(),
                updatedCliente.getCorreo(),
                updatedCliente.getFechaCreacion(),
                updatedCliente.getPolizas()
        );
    }
    
}
