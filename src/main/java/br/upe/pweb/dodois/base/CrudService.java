package br.upe.pweb.dodois.base;

import java.time.LocalDateTime;

import org.springframework.data.repository.CrudRepository;

public interface CrudService<T extends Entidade, Long> {

  <Dao extends CrudRepository<T, Long>> Dao getDao();

  default void validarIncluir(T entidade) {
    
  }
  
  default void validarProcurar(Long id) {
    
  }

  default T incluir(T entidade) {
    this.validarIncluir(entidade);
    entidade.setDataInclusao(LocalDateTime.now());
    return getDao().save(entidade);
  }

  default T alterar(T entidade) {
    this.validarIncluir(entidade);
    entidade.setDataUltimaAlteracao(LocalDateTime.now());
    return getDao().save(entidade);
  }

  default void excluir(Long id) {
    getDao().deleteById(id);
  }

  default Iterable<T> listar() {
    return getDao().findAll();
  }

  default T procurar(Long id) {
    validarProcurar(id);
    return getDao().findById(id).get();
  }
}
