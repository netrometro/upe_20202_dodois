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
                    <Card className="mt-3">
                        <CardBody>
                            <CardTitle tag="h5" >Eventos em andamento</CardTitle>
                        </CardBody>
                    </Card>
                    <Card className="mt-3">
                        <CardBody>
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Selecione um evento</option>
                            <option value="1">Jubileu 	03/12/2021 </option>
                            <option value="2">Fulano 	02/12/2021 </option>
                            <option value="3">Beltrano 	05/12/2021 </option>
                        </select>
                        <Evento />
                        </CardBody>
                    </Card>
                </Container>
            </>
        )
    }
}