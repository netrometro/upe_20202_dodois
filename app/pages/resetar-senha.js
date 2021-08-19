import { Component } from "react";

const style = {
    backgroundColor: "rgba(0, 0, 0, 0)",
    //boxShadow: "2px 2px 10px 0.1px black",
    border: "1px solid black",
    borderRadius: "15px"
}


export default class ResetarSenha extends Component {

    render() {
        return (
            <div className="container-fluid d-flex justify-content-center">
                <div className="row col-sm-5 p-3 mt-5" style={style}>
                    <form>
                        <div className="mb-3 " >
                        <h3 className="d-flex justify-content-center">Recuperar Acesso</h3>
                            <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Digite seu email para recuperar sua senha"/>
                        </div>
                        <div className="d-flex justify-content-center" >
                            <div className="row col-sm-5">
                                <button className="btn btn-secondary">Enviar</button>
                            </div>
                        </div>
                        <div className="text-center">
                            <a href="url ">Lembrei minha senha agora</a>
                        </div>
                        <div className="text-center">
                            <a className="text-danger " href="url ">Ainda não possuo cadastro</a>
                        </div>

                    </form>
                </div>


            </div>
        )
    }
}