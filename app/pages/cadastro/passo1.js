import { Component } from "react";
import Menu from "/components/menu";
import axios from "axios";
import mostrarAlerta from "../../services/alerta-padrao";
import formVazio from "../../services/form-vazio";

export default class Passo1 extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: "",
      senha: "",
      confirmacaoSenha: ""
    }
    this.onDefinirEmail = this.onDefinirEmail.bind(this);
    this.onDefinirSenha = this.onDefinirSenha.bind(this);
    this.onDefinirConfirmacaoSenha = this.onDefinirConfirmacaoSenha.bind(this);
    this.onCadastrar = this.onCadastrar.bind(this);
    this.onValidarCampos = this.onValidarCampos.bind(this);
  }

  onValidarCampos(){
    let regex = new RegExp(/^[a-z0-9.]+@[a-z0-9]+.[a-z]+.([a-z]+)?$/);
    if(formVazio(this.state)){
      mostrarAlerta("Campos nao preenchidos", "voce nao preencheu os campos");
    }else if(!regex.test(this.state.email)){
      mostrarAlerta("Email Invalido", "o email deve seguir o padrao exemplo@gmail.com");
    }else if(this.state.senha.length < 8 || this.state.senha.length > 32){
      mostrarAlerta("Senha Invalida", "a senha deve possuir entre 8 e 32 caracteres");
    }else if(this.state.senha != this.state.confirmacaoSenha){
      mostrarAlerta("Senhas Nao Conferem", "confira se as senhas estao iguais");
    }else {
      return true;
    }
  }

  onCadastrar(){
    if(this.onValidarCampos()){
      let baseUrl = "http://localhost:5000/api/auth/cadastro/passo1";
      let corpo = {email: this.state.email, senha: this.state.senha};
      axios.post(baseUrl, corpo).then((res)=>{
       switch(res.data.status){
         case "USUARIO_CRIADO_SUCESSO":
           mostrarAlerta("Sucesso", "voce foi cadastrado com sucesso", "success");
           window.location.href = "/cadastro/passo2";
           break;
         case "CAMPOS_INCORRETOS":
           mostrarAlerta("Dados Invalidos", "voce nao preencheu os dados corretamente");
           break;
         case "EMAIL_INVALIDO":
           mostrarAlerta("Email Invalido", "o email deve seguir o padrao exemplo@gmail.com");
           break;
         case "SENHA_INVALIDA":
           mostrarAlerta("Senha Invalida", "a senha deve possuir entre 8 e 32 caracteres");
           break;
         case "USUARIO_JA_EXISTE":
           mostrarAlerta("Usuario Ja Existe", "email ja cadastrado no sistema");
           break;
         default:
           mostrarAlerta("Erro Inesperado", "entre em contato com o mantenedor do site");
       }
      }).catch((erro)=>{
        console.log(erro);
      })
    }
  }

  onDefinirEmail(event){
    this.setState({email: event.target.value});
  }

  onDefinirSenha(){
    this.setState({senha: event.target.value});
  }

  onDefinirConfirmacaoSenha(){
    this.setState({confirmacaoSenha: event.target.value});
  }


  render() {
    return (
      <>
      <Menu />
      <div className="container-fluid d-flex justify-content-center">
        <div className="row col-sm-4 p-3">
          <h3 className="mt-5 mb-5 text-center">Preencha os dados para realizar seu cadastro</h3>
          <div className="mb-3">
            <label className="form-label">Endereço de email:</label>
            <input onChange={this.onDefinirEmail} type="email" className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">Senha:</label>
            <input onChange={this.onDefinirSenha} type="password" className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">Confirmação de senha:</label>
            <input onChange={this.onDefinirConfirmacaoSenha} type="password" className="form-control" />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className=" form-check-input" />
            <label className="form-check-label">Manter-me conectado</label>
          </div>
          <button onClick={this.onCadastrar} className="btn btn-secondary">Realizar cadastro</button>
        </div>
      </div>
      </>
    )
  }
}
