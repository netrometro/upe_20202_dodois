import { Component } from "react";

const style = {
    backgroundColor: "rgba(0, 0, 0, 0)",
    //boxShadow: "2px 2px 10px 0.1px black",
    border: "1px solid black",
    borderRadius: "15px"
}


export default class Login extends Component {

    render() {
        return (
            <div className="container-fluid d-flex justify-content-center">
                <div className="row col-sm-6 p-3 mt-5" style={style}>
                    <form>
                        <div className="mb-3" >
                            <h3 className="d-flex justify-content-center">Entrar</h3>
                            <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email"/>
                        </div>
                        <div className="mb-3">
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Senha"/>
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" >Me Manter Conectado</label>
                        </div>
                        <div className="d-flex justify-content-center" >
                            <div className="row col-sm-5">
                                <button className="btn btn-secondary">Entrar</button>
                            </div>
                        </div>
                        <div className="text-center">
                            <a href="url ">Ainda não sou cadastrado</a>
                        </div>
                        <div className="text-center">
                            <a className="text-danger " href="url ">Esqueci minha senha</a>
                        </div>

                    </form>
                </div>

            </div>
        )
    }
}