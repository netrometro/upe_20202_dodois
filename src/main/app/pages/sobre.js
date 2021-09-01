import { Component } from "react";
import { Container, Row, Col } from 'reactstrap';
import Menu from "/components/menu";



export default class sobre extends Component {
    render() {
        return (
            <>
                <Menu />
                <div>
                    Conteúdo do corpo do documento!
                </div>
                <footer className="pouco-texto" >
                    <p style={{ marginTop: "10px" }}>&copy; Todos os Direitos Reservados</p>
                </footer>
            </>
        )
    }
}
