import { Component } from "react";

export default class Menu extends Component {

    render() {
        return (
            <div>
                <nav className="navbar navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">
                            Tracker de Dodóis
                        </a>
                    </div>
                </nav>
            </div>
        )
    }
}
