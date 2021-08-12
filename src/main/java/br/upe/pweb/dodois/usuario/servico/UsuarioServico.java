package br.upe.pweb.dodois.usuario.servico;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import br.upe.pweb.dodois.usuario.dao.ICredenciadoDao;
import br.upe.pweb.dodois.usuario.dao.IUsuarioDao;
import br.upe.pweb.dodois.usuario.model.Credenciado;
import br.upe.pweb.dodois.usuario.model.Grupo;
import br.upe.pweb.dodois.usuario.model.Parentesco;
import br.upe.pweb.dodois.usuario.model.Usuario;
import br.upe.pweb.dodois.usuario.servico.interfaces.IUsuarioServico;

@Service
public class UsuarioServico implements IUsuarioServico {
  @Autowired
  private IUsuarioDao dao;
  
  @Autowired
  private ICredenciadoDao credenciadoDao;

  @SuppressWarnings("unchecked")
  @Override
  public IUsuarioDao getDao() {
    return this.dao;
  }


  public Usuario incluir(Usuario usuario, Long idCredenciado) {
    Optional<Credenciado> credenciado = credenciadoDao.findById(idCredenciado);
        
    if (!credenciado.isPresent()){
      throw new RuntimeException("Credenciado não existe.");
    }
    
    usuario.setParentesco(Parentesco.NAOPOSSUI);
    usuario.setCredenciado(credenciado.get());
    
    IUsuarioServico.super.incluir(usuario);
    
    usuario.setGrupo(new Grupo(usuario));
    
    return getDao().save(usuario);
  }
}
