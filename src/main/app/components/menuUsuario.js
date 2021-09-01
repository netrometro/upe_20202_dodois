import { Component } from "react";
import Link from "next/link";

export default class MenuUsuario extends Component {

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-md">
                <a href="/"><img src="https://i.imgur.com/Vugdwag.png" className=" mt-2" height="40px" /></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end m-3" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item m-1 me-md-4">
                                <Link className="nav-link" href="/"><a className="text-decoration-none" style={{color:"#216651"}}>Página Inicial</a></Link>
                            </li>
                            <li className="nav-item m-1 me-md-4">
                                <Link className="nav-link" href="#"><a className="text-decoration-none" style={{color:"#216651"}}>Perfil</a></Link>
                            </li>
                            <li className="nav-item m-1 me-md-4">
                                <Link className="nav-link" href="#"><a className="text-decoration-none" style={{color:"#216651"}}>Termos de Uso</a></Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav">
                            <li className="nav-item m-1">
                                <Link className="nav-link" href="#"><a className="text-decoration-none" style={{color:"#216651"}}>Sobre</a></Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
