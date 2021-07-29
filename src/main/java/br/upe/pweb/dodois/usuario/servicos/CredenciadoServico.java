package br.upe.pweb.dodois.usuario.servicos;

import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.upe.pweb.dodois.usuario.dao.ICredenciadoDao;
import br.upe.pweb.dodois.usuario.model.Credenciado;
import br.upe.pweb.dodois.usuario.servicos.interfaces.ICredenciadoServico;

@Service
public class CredenciadoServico implements ICredenciadoServico {
	@Autowired private ICredenciadoDao dao;

	@SuppressWarnings("unchecked")
	@Override
	public ICredenciadoDao getDao() {
		return this.dao;
	}

	@Override
	public Credenciado incluir(Credenciado credenciado){
		credenciado.setDataInclusao(LocalDateTime.now());
    	Credenciado credenciadoCriado = getDao().save(credenciado);
    	return credenciadoCriado;
	}

	@Override
	public Credenciado alterar(Credenciado credenciado){
		Credenciado credenciadoExistente = getDao().findById(credenciado.getId()).get(); 
		credenciadoExistente.setEmail(credenciado.getEmail()); 
		credenciadoExistente.setDataUltimaAlteracao(LocalDateTime.now());
		getDao().save(credenciadoExistente);
		return credenciadoExistente;
	}

}
