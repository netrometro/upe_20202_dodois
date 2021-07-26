package com.example.usuario.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.usuario.model.Usuario;

@Repository
public interface IUsuarioDao extends CrudRepository<Usuario, Long> { }
