import { Component } from "react";
import Link from "next/link";
import Image from "next/image";

export default class MenuUsuario extends Component {

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-md">
                <Link passHref href="/"><Image src="https://i.imgur.com/Vugdwag.png" className="m-2" height="25px"/></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end m-3" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item m-1 me-md-4">
                                <Link className="nav-link text-decoration-none" href="/usuario/home" style={{color:"#216651"}}>Início</Link>
                            </li>
                            <li className="nav-item m-1 me-md-4">
                                <Link className="nav-link text-decoration-none" href="/termos-de-uso" style={{color:"#216651"}}>Termos de Uso</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav">
                            <li className="nav-item m-1">
                                <Link className="nav-link text-decoration-none" href="/sobre" style={{color:"#216651"}}>Sobre</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
