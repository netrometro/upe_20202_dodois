package br.upe.pweb.dodois.usuario.servico;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import br.upe.pweb.dodois.usuario.dao.IUsuarioDao;
import br.upe.pweb.dodois.usuario.model.Usuario;
import br.upe.pweb.dodois.usuario.servico.interfaces.IUsuarioServico;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Service
public class UsuarioServico implements IUsuarioServico {
  @Autowired
  private IUsuarioDao dao;

  @SuppressWarnings("unchecked")
  @Override
  public IUsuarioDao getDao() {
    return this.dao;
  }

  @Override
  public void validarIncluir(Usuario usuario) {
    Matcher matcherNome = Pattern.compile("").matcher(usuario.getNome());
    Matcher matcherDataNasc = Pattern.compile("").matcher(usuario.getDataNasc());
    Matcher matcherParentesco = Pattern.compile("").matcher(usuario.getParentesco().toString());
    Matcher matcherPeso = Pattern.compile("").matcher(usuario.getPeso().toString());
    Matcher matcherAltura = Pattern.compile("").matcher(usuario.getNome());

    if (usuario.getNome() == null && usuario.getDataNasc() == null &&
        usuario.getAltura() == null && usuario.getPeso() == null &&
        usuario.getParentesco() == null){
        throw new RuntimeException("Todos os campos não foram informados.");
    }
    else if (!matcherNome.matches()){
        throw new RuntimeException("O nome deve possuir de 5 a 50 caracteres.");
    } else if (!matcherPeso.matches()) {
        throw new RuntimeException("O peso deve possuir um número válido.");
    } else if (!matcherAltura.matches()) {
        throw new RuntimeException("A altura deve possuir um número válido.");
    } else if (!matcherDataNasc.matches()) {
        throw new RuntimeException("A data de nascimento.");
    } else if (!matcherParentesco.matches()) {
        throw new RuntimeException("O email deve seguir o padrão: email@mail.com.");
    }
}
}
