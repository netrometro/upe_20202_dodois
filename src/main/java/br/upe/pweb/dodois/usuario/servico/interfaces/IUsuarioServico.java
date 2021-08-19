package br.upe.pweb.dodois.usuario.servico.interfaces;


import br.upe.pweb.dodois.base.CrudService;
import br.upe.pweb.dodois.usuario.model.Usuario;
import br.upe.pweb.dodois.usuario.model.Credenciado;
import br.upe.pweb.dodois.usuario.model.Grupo;

public interface IUsuarioServico extends CrudService<Usuario, Long> {
    void alterarUsuarioNovo(Credenciado credenciado, Grupo grupo, Usuario usuarioCriado);
}