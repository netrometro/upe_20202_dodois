import { Component } from "react";
import { Container } from "reactstrap";
import { Card, CardBody, CardTitle } from "reactstrap";
import MenuUsuario from "../components/menuUsuario";
import Evento from "../components/evento";

export default class Lembretes extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <MenuUsuario />
                <Container>
                    <h3 className="mt-5" style={{ color: "#216651" }}>Eventos em andamento</h3>
                    <Card className="mt-3">
                        <CardBody>
                            <select className="form-select border-2 p-2" style={{ borderColor: "#74BAA0" }} aria-label="Default select example">
                                <option selected style={{ color: "#216651" }}>Selecione um evento</option>
                                <option value="1">Jubileu 	03/12/2021 </option>
                                <option value="2">Fulano 	02/12/2021 </option>
                                <option value="3">Beltrano 	05/12/2021 </option>
                            </select>
                            <Evento />
                        </CardBody>
                    </Card>
                </Container>
                <footer className="muito-texto" >
                    <p style={{ marginTop: "10px" }}>&copy; Todos os Direitos Reservados</p>
                </footer>
            </>
        )
    }
}