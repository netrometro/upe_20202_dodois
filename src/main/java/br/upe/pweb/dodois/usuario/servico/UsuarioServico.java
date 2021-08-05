package br.upe.pweb.dodois.usuario.servico;

import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.upe.pweb.dodois.usuario.dao.IUsuarioDao;
import br.upe.pweb.dodois.usuario.servico.interfaces.IUsuarioServico;

@Service
public class UsuarioServico implements IUsuarioServico {
	@Autowired private IUsuarioDao dao;

	@SuppressWarnings("unchecked")
	@Override
	public IUsuarioDao getDao() {
		return this.dao;
	}

}
