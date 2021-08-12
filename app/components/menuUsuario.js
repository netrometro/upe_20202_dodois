import { Component } from "react";

export default class MenuUsuario extends Component {

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-md navbar-light bg-light">
                <img src="/bootstrap-logo.svg" alt="" width="30" height="24"/>
                    <a className="navbar-brand" href="/">Tracker de Dodois</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/">Página Inicial</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Perfil</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Termos de Uso</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Sobre</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
