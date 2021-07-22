package br.upe.pweb.dodois.usuarios.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.upe.pweb.dodois.usuarios.model.Usuario;
import br.upe.pweb.dodois.usuarios.servicos.IUsuarioServico;

@RestController
@RequestMapping("/api")
public class UsuarioController {
	
	@Autowired
	private IUsuarioServico servico;
	
	@GetMapping("/usuarios")
	public List<Usuario> listar() {
		return (List<Usuario>) this.servico.listar();
	}
	
	@PostMapping("/usuario")
	public Usuario incluir(@RequestBody Usuario usuario) {
		return this.servico.incluir(usuario);
	}
}
