package br.upe.pweb.dodois.usuario.servico;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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

    if (credenciado == null) {
      throw new RuntimeException("O dados do credenciado sao de preenchimento obrigatorio");
    }

    if (getDao().existsByEmail(credenciado.getEmail())) {
      throw new RuntimeException("O usuário já existe");
    }
    
  }

  public boolean emailExiste(String email) {
    return getDao().existsByEmail(email);
  }

  public boolean existe(Long id) {
    return getDao().existsById(id);
  }

  public boolean credenciaisExistem(Credenciado credenciado) {
    return getDao().existsByEmailAndSenha(credenciado.getEmail(), credenciado.getSenha());
  }

  public Credenciado procurarPorEmail(String email) {
    return getDao().findByEmail(email);
  }

}
