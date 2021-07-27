package br.upe.pweb.dodois;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.ServletComponentScan;

@SpringBootApplication
@ServletComponentScan
public class DodoisApplication {

	public static void main(String[] args) {
		SpringApplication.run(DodoisApplication.class, args);
	}

}
