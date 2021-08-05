package br.upe.pweb.dodois.usuario.servico;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.upe.pweb.dodois.usuario.dao.ICredenciadoDao;
import br.upe.pweb.dodois.usuario.model.Credenciado;
import br.upe.pweb.dodois.usuario.servico.interfaces.ICredenciadoServico;

@Service
public class CredenciadoServico implements ICredenciadoServico {
	@Autowired private ICredenciadoDao dao;

	@SuppressWarnings("unchecked")
	@Override
	public ICredenciadoDao getDao() {
		return this.dao;
	}

	public Boolean emailExiste(String email){
		return getDao().existsByEmail(email);
	}

	public Boolean existe(Long id){
		return getDao().existsById(id);
	}

	public Boolean credenciaisExistem(Credenciado credenciado){
		return getDao().existsByEmailAndSenha(credenciado.getEmail(), credenciado.getSenha());
	}

	public Credenciado procurarPorEmail(String email){
		return getDao().findByEmail(email);
	}

}
