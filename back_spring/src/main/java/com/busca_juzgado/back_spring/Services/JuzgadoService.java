package com.busca_juzgado.back_spring.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.busca_juzgado.back_spring.Interfaces.IJuzgadoService;
import com.busca_juzgado.back_spring.Models.Juzgado;
import com.busca_juzgado.back_spring.Repositories.JuzgadoRepository;

@Service
public class JuzgadoService implements IJuzgadoService {

    @Autowired
    private JuzgadoRepository repo;

    @Override
    public List<Juzgado> getAllJuzgados() {
        System.out.println("LOG" + this.repo.findAll());
        List<Juzgado> result = this.repo.findAll();
        return result;
    }

    @Override
    public List<Juzgado> getJuzgadoForNombre(String nombre) {
        return this.repo.findByNombreContainsIgnoreCase(nombre);
    }

    @Override
    public List<Juzgado> getJuzgadoForPueblo(String pueblo) {
        return this.repo.findByPuebloIgnoreCase(pueblo);
    }

    @Override
    public List<Juzgado> getJuzgadoForProvincia(String provincia) {
        return this.repo.findByProvinciaIgnoreCase(provincia);
    }

    @Override
    public List<Juzgado> getJuzgadoForComunidad(String comunidad) {
        return this.repo.findByComunidadIgnoreCase(comunidad);
    }

}
