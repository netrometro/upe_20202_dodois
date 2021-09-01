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
                  <div className="collapse navbar-collapse justify-content-end m-3" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item m-1 me-md-4">
                                <Link className="nav-link" href="/"><a className="text-decoration-none" style={{color:"#216651"}}>Página Inicial</a></Link>
                            </li>
                            <li className="nav-item m-1 me-md-4">
                                <Link className="nav-link" href="/termos-de-uso"><a className="text-decoration-none" style={{color:"#216651"}}>Termos de Uso</a></Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav">
                            <li className="nav-item m-1">
                                <Link className="nav-link" href="/sobre"><a className="text-decoration-none" style={{color:"#216651"}}>Sobre</a></Link>
                            </li>
                        </ul>
                    </div>
                </div>
              </nav>
            
        )
    }
}
