package com.example.usuario.servicos;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.usuario.dao.IUsuarioDao;

@Service
public class UsuarioServico implements IUsuarioServico {
	@Autowired private IUsuarioDao dao;

	@SuppressWarnings("unchecked")
	@Override
	public IUsuarioDao getDao() {
		return this.dao;
	}

}
