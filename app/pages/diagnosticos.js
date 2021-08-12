import { Component } from "react";
import { Container } from "reactstrap";
import { Card, CardBody, CardTitle } from "reactstrap";
import { Table } from "reactstrap";
import MenuUsuario from "../components/menuUsuario";


export default class Diagnosticos extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <MenuUsuario />
                <Container>
                    <Card className="mt-3">
                        <CardBody>
                            <CardTitle tag="h5" >Diagnósticos</CardTitle>
                        </CardBody>
                    </Card>
                    <Card className="mt-3">
                        <CardBody>
                            <Table>
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Parente</th>
                                        <th>Data</th>
                                        <th>Diagnóstico</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>1</th>
                                        <td>Fulano</td>
                                        <td>12/08/2021</td>
                                        <td>Dermatite de contato devido...</td>
                                        <td><a href="#">ver mais</a></td>
                                    </tr>
                                    <tr>
                                        <th>2</th>
                                        <td>Cicrano</td>
                                        <td>12/08/2021</td>
                                        <td>Dermatite de contato devido...</td>
                                        <td><a href="#">ver mais</a></td>
                                    </tr>
                                    <tr>
                                        <th>3</th>
                                        <td>Beltranon</td>
                                        <td>12/08/2021</td>
                                        <td>Dermatite de contato devido...</td>
                                        <td><a href="#">ver mais</a></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </CardBody>
                    </Card>
                </Container>
            </div>
        )
    }
}