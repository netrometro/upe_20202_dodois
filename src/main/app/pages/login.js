import Link from "next/link";
import { Component } from "react";
import Menu from "/components/menu";

const style = {
    backgroundColor: "rgba(0, 0, 0, 0)",
    //boxShadow: "2px 2px 10px 0.1px black",
    border: "1px solid #216651",
    borderRadius: "15px"
}

export default class Login extends Component {

    render() {
        return (
            <>
            <Menu />
                <div className="container-fluid d-flex justify-content-center mt-5">
                    <div className="row col-sm-6 p-3 mt-5" style={style}>
                        <form>
                            <div className="mb-3" >
                                <h3 className="d-flex justify-content-center" style={{ color: "#216651" }}>Entrar</h3>
                                <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
                            </div>
                            <div className="mb-3">
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Senha" />
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" >Me Manter Conectado</label>
                            </div>
                            <div className="d-flex justify-content-center " >
                                <div className="row col-sm-5">
                                    <button className="btn mt-5" style={{background:"#216651", color:"white", borderColor:"#74BAA0"}}>Entrar</button>
                                </div>
                            </div>
                            <div className="text-center mt-3">
                                <Link passHref href="/" className="text-decoration-none" style={{ color: "#216651" }}><b>Ainda não sou cadastrado</b></Link>
                            </div>
                            <div className="text-center mt-3">
                                <Link passHref className="text-danger text-decoration-none" style={{ color: "#216651" }} href="/resetar-senha"><b>Esqueci minha senha</b></Link>
                            </div>
                        </form>
                    </div>
                </div>
                <footer className="pouco-texto" >
                    <p style={{ marginTop: "10px" }}>&copy; Todos os Direitos Reservados</p>
                </footer>
            </>
        )
    }
}