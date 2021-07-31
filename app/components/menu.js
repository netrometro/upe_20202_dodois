import { Component } from "react";

export default class Menu extends Component {

    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-md navbar-light bg-light">
                <img src="/bootstrap-logo.svg" alt="" width="30" height="24"/>
                    <a class="navbar-brand" href="#">Tracker de Dodois</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <a class="nav-link" href="#">Página Inicial</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Termos de Uso</a>
                            </li>
                        </ul>
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="#">Sobre</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Contatos</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
