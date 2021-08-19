package br.upe.pweb.dodois.usuario.servico;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import br.upe.pweb.dodois.usuario.dao.IGrupoDao;
import br.upe.pweb.dodois.usuario.model.Grupo;
import br.upe.pweb.dodois.usuario.model.Usuario;
import br.upe.pweb.dodois.usuario.servico.interfaces.IGrupoServico;

import java.time.LocalDateTime;
import java.util.ArrayList;

@Service
public class GrupoServico implements IGrupoServico {
  @Autowired
  private IGrupoDao dao;

  @SuppressWarnings("unchecked")
  @Override
  public IGrupoDao getDao() {
    return this.dao;
  }

  public Grupo incluirGrupoInicial(Usuario usuario){
    Grupo grupo = new Grupo();
    grupo.setDataInclusao(LocalDateTime.now());
    ArrayList<Usuario> usuarios = new ArrayList<Usuario>();
    usuarios.add(usuario);
    grupo.setUsuarios(usuarios);
    getDao().save(grupo);
    return grupo;
  }

}