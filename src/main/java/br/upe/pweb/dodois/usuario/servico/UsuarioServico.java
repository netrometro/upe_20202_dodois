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
        Matcher matcherNome = Pattern.compile("^[a-zA-ZàáâãèéêìíîòóôõùúûýçÀÁÂÃÈÉÊÌÍÎÒÓÔÕÙÚÛÝÇ ]{3,50}$").matcher(usuario.getNome());
        Matcher matcherDataNasc = Pattern.compile("^(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[012])/(19|20)[0-9]{2}$").matcher(usuario.getDataNasc());
        Matcher matcherParentesco = Pattern.compile("^(NAOPOSSUI|IRMÃO|IRMÃ|FILHA|FILHO|PAI|MÃE|AVÓ|AVÔ|TIO|TIA|FAMILIAR|CONHECIDO|VIZINHO)$").matcher(usuario.getParentesco().toString());
        Matcher matcherSexo = Pattern.compile("^(MASCULINO|FEMININO)$").matcher(usuario.getSexo().toString());
        Matcher matcherPeso = Pattern.compile("^(0|[1-9][0-9]*)(.[0-9]+)?$").matcher(usuario.getPeso().toString());
        Matcher matcherAltura = Pattern.compile("^(0|[1-9][0-9]*)(.[0-9]+)?$").matcher(usuario.getAltura().toString());

        if (usuario.getNome() == null || usuario.getDataNasc() == null || usuario.getAltura() == null || usuario.getPeso() == null || usuario.getParentesco() == null) {
            throw new RuntimeException("CAMPOS_INCORRETOS");
        } else if (!matcherNome.matches()) {
            throw new RuntimeException("NOME_INVALIDO");
        } else if (!matcherPeso.matches()) {
            throw new RuntimeException("PESO_INVALIDO");
        } 
        else if (!matcherSexo.matches()) {
            throw new RuntimeException("SEXO_INVALIDO");
        } else if (!matcherAltura.matches()) {
            throw new RuntimeException("ALTURA_INVALIDA");
        } else if (!matcherDataNasc.matches()) {
            throw new RuntimeException("DATA_NASC_INVALIDA");
        } else if (!matcherParentesco.matches()) {
            throw new RuntimeException("PARENTESCO_INVALIDO");
        }
    }
}
