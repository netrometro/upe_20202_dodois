import { Component } from "react";

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
  }

  onCadastrar(){
    console.log(this.state);
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
    )
  }
}
