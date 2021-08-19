package br.upe.pweb.dodois.administracaomedicacoes.servico;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.upe.pweb.dodois.administracaomedicacoes.dao.IAdmMedicacaoDao;
import br.upe.pweb.dodois.administracaomedicacoes.servico.interfaces.IAdmMedicacaoServico;

@Service
public class AdmMedicacaoServico implements IAdmMedicacaoServico{
    @Autowired private IAdmMedicacaoDao dao;

	@SuppressWarnings("unchecked")
	@Override
	public IAdmMedicacaoDao getDao() {
		return this.dao;
	}
}
