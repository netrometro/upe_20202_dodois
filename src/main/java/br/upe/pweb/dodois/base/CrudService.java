package br.upe.pweb.dodois.base;

import java.util.Optional;
import org.springframework.data.repository.CrudRepository;

public interface CrudService<T extends Entidade, Long> {

  <Dao extends CrudRepository<T, Long>> Dao getDao();

  default T incluir(T entidade) {
    final T salva = getDao().save(entidade);
    return salva;
  }

  default T alterar(T entidade) {
    final T salva = getDao().save(entidade);
    return salva;
  }

  default void excluir(Long id) {
    getDao().deleteById(id);
  }

  default Iterable<T> listar() {
    return getDao().findAll();
  }

  default Optional<T> procurar(Long id) {
    return getDao().findById(id);
  }
}
