import { Component } from "react";
import Link from "next/link";
import Menu from "/components/menu";

const style = {
    backgroundColor: "rgba(0, 0, 0, 0)",
    //boxShadow: "2px 2px 10px 0.1px black",
    border: "1px solid #216651",
    borderRadius: "15px"
}


export default class ResetarSenha extends Component {

    render() {
        return (
            <>
                <Menu />
                <div className="container-fluid d-flex justify-content-center mt-5">
                    <div className="row col-sm-5 p-3 mt-5" style={style}>
                        <form>
                            <div className="mb-3 " >
                                <h3 className="d-flex justify-content-center" style={{ color: "#216651" }}>Recuperar Acesso</h3>
                                <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Digite seu email para recuperar sua senha" />
                            </div>
                            <div className="d-flex justify-content-center" >
                                <div className="row col-sm-5">
                                    <button className="btn mt-5" style={{ background: "#216651", color: "white", borderColor:"#74BAA0" }}>Enviar</button>
                                </div>
                            </div>
                            <div className="text-center mt-3">
                                <Link href="url "><a className="text-decoration-none" style={{ color: "#216651" }}><b>Lembrei minha senha agora</b></a></Link>
                            </div>
                            <div className="text-center mt-3">
                                <Link className="text-danger " href="url "><a className="text-decoration-none" style={{ color: "#216651" }}><b>Ainda não possuo cadastro</b></a></Link>
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