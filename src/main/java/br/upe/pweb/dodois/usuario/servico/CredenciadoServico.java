package br.upe.pweb.dodois.usuario.servico;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import br.upe.pweb.dodois.usuario.dao.ICredenciadoDao;
import br.upe.pweb.dodois.usuario.model.Credenciado;
import br.upe.pweb.dodois.usuario.servico.interfaces.ICredenciadoServico;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

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
    Pattern pattern = Pattern.compile("^[a-z0-9.]+@[a-z0-9]+.[a-z]+.([a-z]+)?$");
    Matcher matcher = pattern.matcher(credenciado.getEmail());

    if (credenciado.getEmail() == null && credenciado.getSenha() == null){
      throw new RuntimeException("Email e senha não especificados.");
    }

    else if (!matcher.matches()){
      throw new RuntimeException("O email deve seguir o padrão: email@mail.com.");
    }

    else if (credenciado.getSenha().length() < 8 || credenciado.getSenha().length() > 32){
      throw new RuntimeException("A senha deve possuir entre 8 e 32 caracteres.");
    }

    else if (getDao().existsByEmail(credenciado.getEmail())) {
      throw new RuntimeException("Usuário já existente com esse email.");
    }
  }
}
