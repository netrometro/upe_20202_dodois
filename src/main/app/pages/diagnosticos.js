import { Component } from "react";
import { Container, Card, CardBody,Table, Button } from "reactstrap";
import MenuUsuario from "../components/menuUsuario";
import Link from "next/link";

export default class Diagnosticos extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <MenuUsuario />             
                <Container>                
                    <h3 className="mt-5" style={{ color: "#216651" }}>Diagnósticos</h3>
                    <Card className="mt-3">
                        <CardBody>
                            <Table>
                                <thead>
                                    <tr style={{ color: "#216651" }} >
                                        <th></th>
                                        <th>Parente</th>
                                        <th>Data</th>
                                        <th>Diagnóstico</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style={{ color: "#74BAA0" }}>
                                        <th style={{ color: "#216651" }}>1</th>
                                        <td>Fulano</td>
                                        <td>12/08/2021</td>
                                        <td>Dermatite de contato devido...</td>
                                        <td className="d-flex justify-content-end" ><Button id="Popover1" color="success" outline type="button" size="sm" >Ver mais</Button></td>
                                    </tr>
                                    <tr style={{ color: "#74BAA0" }}>
                                        <th style={{ color: "#216651" }}>2</th>
                                        <td>Cicrano</td>
                                        <td>12/08/2021</td>
                                        <td>Dermatite de contato devido...</td>
                                        <td className="d-flex justify-content-end"><Button id="Popover1" color="success" outline type="button" size="sm" >Ver mais</Button></td>
                                    </tr>
                                    <tr style={{ color: "#74BAA0" }}>
                                        <th style={{ color: "#216651" }}>3</th>
                                        <td>Beltranon</td>
                                        <td>12/08/2021</td>
                                        <td>Dermatite de contato devido...</td>
                                        <td className="d-flex justify-content-end"><Button id="Popover1" color="success" outline type="button" size="sm" >Ver mais</Button></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </CardBody>
                    </Card>
                </Container>
                <footer className="pouco-texto" >
                    <p style={{ marginTop: "10px" }}>&copy; Todos os Direitos Reservados</p>
                </footer>
            </div>
        )
    }
}