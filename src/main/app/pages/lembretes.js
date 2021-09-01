import { Component } from "react";
import { Container } from "reactstrap";
import { Card, CardBody, CardTitle } from "reactstrap";
import { Table } from "reactstrap";
import MenuUsuario from "../components/menuUsuario";
import Link from "next/link";

export default class Lembretes extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                
                <Container>
                <MenuUsuario />
                    <Card className="mt-3">
                        <CardBody>
                            <CardTitle tag="h5" >Lembretes</CardTitle>
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
                                        <th>Descrição</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>1</th>
                                        <td>Fulano</td>
                                        <td>Amanhã 08h30</td>
                                        <td>Comprar Dipirona, dipirona e dipirona...</td>
                                        <td><Link href="#">ver mais</Link></td>
                                    </tr>
                                    <tr>
                                        <th>2</th>
                                        <td>Fulano</td>
                                        <td>Amanhã 08h30</td>
                                        <td>Comprar Dipirona, dipirona e dipirona...</td>
                                        <td><Link href="#">ver mais</Link></td>
                                    </tr>
                                    <tr>
                                        <th>3</th>
                                        <td>Fulano</td>
                                        <td>Amanhã 08h30</td>
                                        <td>Comprar Dipirona, dipirona e dipirona...</td>
                                        <td><Link href="#">ver mais</Link></td>
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