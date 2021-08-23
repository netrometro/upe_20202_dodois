package br.upe.pweb.dodois.usuario.servico;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import br.upe.pweb.dodois.usuario.dao.IUsuarioDao;
import br.upe.pweb.dodois.usuario.model.Usuario;
import br.upe.pweb.dodois.usuario.model.Credenciado;
import br.upe.pweb.dodois.usuario.model.Grupo;

import br.upe.pweb.dodois.usuario.servico.interfaces.IUsuarioServico;

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
        if (usuario.getNome() == null || usuario.getDataNasc() == null || 
            usuario.getSexo() == null || usuario.getAltura() == null || 
            usuario.getPeso() == null || usuario.getParentesco() == null) {
                    throw new RuntimeException("CAMPOS_INCORRETOS");
        } 
        else if (!usuario.getNome().matches("^[a-zA-ZàáâãèéêìíîòóôõùúûýçÀÁÂÃÈÉÊÌÍÎÒÓÔÕÙÚÛÝÇ ]{3,50}$")){
            throw new RuntimeException("NOME_INVALIDO");
        } 
        else if (!usuario.getPeso().toString().matches("^(0|[1-9][0-9]*)(.[0-9]+)?$")) {
            throw new RuntimeException("PESO_INVALIDO");
        } 
        else if (!usuario.getSexo().toString().matches("^(MASCULINO|FEMININO)$")) {
            throw new RuntimeException("SEXO_INVALIDO");
        } 
        else if (!usuario.getAltura().toString().matches("^(0|[1-9][0-9]*)(.[0-9]+)?$")) {
            throw new RuntimeException("ALTURA_INVALIDA");
        } 
        else if (!usuario.getParentesco().toString().matches("^(NAOPOSSUI|IRMÃO|IRMÃ|FILHA|FILHO|PAI|MÃE|AVÓ|AVÔ|TIO|TIA|FAMILIAR|CONHECIDO|VIZINHO)$")) {
            throw new RuntimeException("PARENTESCO_INVALIDO");
        }
    }

    public void alterarUsuarioNovo(Credenciado credenciado, Grupo grupo, Usuario usuarioCriado){
        usuarioCriado.setCredenciado(credenciado);
        usuarioCriado.setGrupo(grupo);
        getDao().save(usuarioCriado);
    }
}
