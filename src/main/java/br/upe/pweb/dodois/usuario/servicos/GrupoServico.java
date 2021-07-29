package br.upe.pweb.dodois.usuario.servicos;

import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.upe.pweb.dodois.usuario.dao.IGrupoDao;
import br.upe.pweb.dodois.usuario.model.Grupo;
import br.upe.pweb.dodois.usuario.servicos.interfaces.IGrupoServico;

@Service
public class GrupoServico implements IGrupoServico{
    @Autowired private IGrupoDao dao;

	@SuppressWarnings("unchecked")
	@Override
	public IGrupoDao getDao() {
		return this.dao;
	}

    @Override
	public Grupo incluir(Grupo grupo){
		grupo.setDataInclusao(LocalDateTime.now());
    	Grupo grupoCriado = getDao().save(grupo);
    	return grupoCriado;
	}  
}
