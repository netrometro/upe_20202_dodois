import Link from "next/link";
import Image from "next/image";
import { Component } from "react";

export default class Menu extends Component {

    render() {
        return (
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <img src="https://i.imgur.com/Vugdwag.png" className="m-2" height="25px"/>
                
                
                <div class="container-fluid d-flex ">
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul class="navbar-nav">
                      <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/">Página Inicial</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">Sobre</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            
        )
    }
}
