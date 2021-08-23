package br.upe.pweb.dodois.usuario.servico;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import br.upe.pweb.dodois.usuario.dao.ICredenciadoDao;
import br.upe.pweb.dodois.usuario.model.Credenciado;
import br.upe.pweb.dodois.usuario.servico.interfaces.ICredenciadoServico;

@Service
public class CredenciadoServico implements ICredenciadoServico {
  @Autowired
  private ICredenciadoDao dao;

  @SuppressWarnings("unchecked")
  @Override
  public ICredenciadoDao getDao() {
    return this.dao;
  }

  @Override
  public void validarIncluir(Credenciado credenciado) {

    if (credenciado.getEmail() == null || credenciado.getSenha() == null){
      throw new RuntimeException("CAMPOS_INCORRETOS");
    }

    else if (!credenciado.getEmail().matches("^[a-z0-9.]+@[a-z0-9]+.[a-z]+.([a-z]+)?$")){
      throw new RuntimeException("EMAIL_INVALIDO");
    }

    else if (credenciado.getSenha().length() < 8 || credenciado.getSenha().length() > 32){
      throw new RuntimeException("SENHA_INVALIDA");
    }

    else if (getDao().existsByEmail(credenciado.getEmail())) {
      throw new RuntimeException("USUARIO_JA_EXISTE");
    }
  }


  @Override
  public void validarProcurar(Long id) {
    if(!getDao().existsById(id)){
      throw new RuntimeException("CREDENCIADO_NAO_EXISTE");
    } 
  }
}