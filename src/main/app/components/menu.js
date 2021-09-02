import Link from "next/link";
import Image from "next/image";
import { Component } from "react";

export default class Menu extends Component {

    render() {
        return (
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link passHref href="/"><Image src="https://i.imgur.com/Vugdwag.png" className="m-2" height="25px"/></Link>
                
                
                <div className="container-fluid d-flex ">
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse justify-content-end m-3" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
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
                </div>
              </nav>
            
        )
    }
}
