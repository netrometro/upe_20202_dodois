package br.upe.pweb.dodois.usuario.servico.interfaces;

import br.upe.pweb.dodois.base.CrudService;
import br.upe.pweb.dodois.usuario.model.Grupo;
import br.upe.pweb.dodois.usuario.model.Usuario;

public interface IUsuarioServico extends CrudService<Usuario, Long> { 
    Usuario definirGrupo(Grupo grupo, Usuario usuario);
}
