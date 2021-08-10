package br.upe.pweb.dodois.usuario.servico.interfaces;


import br.upe.pweb.dodois.base.CrudService;
import br.upe.pweb.dodois.usuario.model.Credenciado;


public interface ICredenciadoServico extends CrudService<Credenciado, Long> {
    boolean emailExiste(String email);
    boolean existe(Long id);
    boolean credenciaisExistem(Credenciado credenciado);
    Credenciado procurarPorEmail(String email);
 }