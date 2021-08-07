package br.upe.pweb.dodois.evento.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.upe.pweb.dodois.evento.model.Sintoma;
import br.upe.pweb.dodois.evento.servico.interfaces.ISintomaServico;

@RestController
@RequestMapping("/api")
public class SintomaController {
	@Autowired private ISintomaServico servico;

	@GetMapping("/sintomas")
	public List<Sintoma> listarSintomas(){
		return (List<Sintoma>) servico.listar();
	}
	
    @PostMapping("/sintoma")
	public String criarSintoma(@Valid @RequestBody Sintoma sintoma) {
		Sintoma sintomaCriado = servico.incluir(sintoma);
		return "Sintoma com id " + sintomaCriado.getId() + " criado com sucesso.";
	}

	@PutMapping("/sintoma/{id}")
	public String atualizarSintoma(@Valid @PathVariable Long id, @Valid @RequestBody Sintoma sintoma) {
		boolean sintomaExiste = servico.getDao().existsById(id);
		if (sintomaExiste){
            Sintoma sintomaExistente = servico.procurar(id);
			sintomaExistente.setTipo(sintoma.getTipo());
			sintomaExistente.setDescricao(sintoma.getDescricao());
			servico.alterar(sintomaExistente);
			return "Sintoma com id " + sintomaExistente.getId() + " alterado com sucesso.";
        } 
        return "Sintoma não existe";
	}

	@DeleteMapping("/sintoma/{id}")
	public String deletarSintoma(@Valid @PathVariable Long id) {
        boolean sintomaExiste = servico.getDao().existsById(id);
		if (sintomaExiste){
            servico.excluir(id);
			return "Sintoma com id " + id + " deletado com sucesso.";
        } 
		return "Sintoma não existe";
	}
}