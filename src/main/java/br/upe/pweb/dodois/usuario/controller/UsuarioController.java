package br.upe.pweb.dodois.usuario.controller;

import javax.validation.Valid;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.upe.pweb.dodois.usuario.model.Credenciado;
import br.upe.pweb.dodois.usuario.model.Grupo;
import br.upe.pweb.dodois.usuario.model.Usuario;
import br.upe.pweb.dodois.usuario.servicos.interfaces.ICredenciadoServico;
import br.upe.pweb.dodois.usuario.servicos.interfaces.IGrupoServico;
import br.upe.pweb.dodois.usuario.servicos.interfaces.IUsuarioServico;

@RestController
@RequestMapping("/api")
public class UsuarioController {

	@Autowired private IUsuarioServico usuarioServico;
	@Autowired private ICredenciadoServico credenciadoServico;
	@Autowired private IGrupoServico grupoServico;

	@PostMapping("/cadastro/passo2/{id}")
	public Usuario cadastrarPasso2(@Valid @PathVariable Long id, @Valid @RequestBody Usuario usuario) {
		Credenciado credenciadoExistente = this.credenciadoServico.procurar(id); 

		usuario.setCredenciado(credenciadoExistente);
		Usuario usuarioCriado = usuarioServico.incluir(usuario);

		List<Usuario> usuarios = new ArrayList<Usuario>();
		usuarios.add(usuarioCriado);

		Grupo grupoInicial = new Grupo();

		grupoInicial.setUsuarios(Arrays.asList(usuarios).get(0));

		Grupo grupoCriado = grupoServico.incluir(grupoInicial);

		usuarioCriado.setGrupo(grupoCriado);
		usuarioServico.alterarGrupo(grupoCriado, usuarioCriado);
		return this.usuarioServico.procurar(usuarioCriado.getId());
	}

}
