import Link from "next/link";
import { Component } from "react";

export default class Menu extends Component {

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-md navbar-light bg-light">
                    <Link className="navbar-brand" href="/">Tracker de Dodois</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link" href="/">Página Inicial</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="#">Termos de Uso</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" href="#">Sobre</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
