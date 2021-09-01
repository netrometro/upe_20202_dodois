import { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import { Button } from 'reactstrap';
import Link from "next/link";
import { RiVirusLine, RiMedicineBottleFill } from "react-icons/ri";
import { GiRemedy } from "react-icons/gi";

import { AiOutlinePlusCircle } from "react-icons/ai";
import { FaDiagnoses, FaBell } from "react-icons/fa";



export default class Evento extends Component {

    render() {
        return (
            <Container>
                <Row xs="2" className="mt-4">
                    <Col>
                        <Card className="border-2" style={{ borderColor: "#74BAA0" }}>
                            <CardBody>
                                <CardTitle tag="h4" style={{ color: "#216651", backgroundColor: "#eff8f1", textAlign: "center" }}><RiVirusLine className="m-3" color="#216651" size="40px" />Sintomas - 10</CardTitle>
                                <CardSubtitle className="mt-4"><Link className="text-danger " href="url "><a className="text-decoration-none" style={{ color: "#216651" }}><b>Adicionar novo</b><AiOutlinePlusCircle className="ms-md-1 mb-1" /></a></Link></CardSubtitle>
                                <CardSubtitle className="mt-2"><Link className="text-danger " href="url "><a className="text-decoration-none" style={{ color: "#216651" }}><b>Todos</b></a></Link></CardSubtitle>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="border-2" style={{ borderColor: "#74BAA0" }}>
                            <CardBody>
                                <CardTitle tag="h4" style={{ color: "#216651", backgroundColor: "#eff8f1", textAlign: "center" }}><FaBell className="m-3" color="#216651" size="40px" />Lembretes - 10</CardTitle>
                                <CardSubtitle className="mt-4"><Link className="text-danger " href="url "><a className="text-decoration-none" style={{ color: "#216651" }}><b>Adicionar novo</b><AiOutlinePlusCircle className="ms-md-1 mb-1" /></a></Link></CardSubtitle>
                                <CardSubtitle className="mt-2"><Link className="text-danger " href="url "><a className="text-decoration-none" style={{ color: "#216651" }}><b>Todos</b></a></Link></CardSubtitle>
                            </CardBody>
                        </Card></Col>
                    <Col className="mt-4">
                        <Card className="border-2" style={{ borderColor: "#74BAA0" }}>
                            <CardBody>
                                <CardTitle tag="h4" style={{ color: "#216651", backgroundColor: "#eff8f1", textAlign: "center" }}><FaDiagnoses className="m-3" color="#216651" size="40px" />Diagnósticos - 1</CardTitle>
                                <CardSubtitle className="mt-4"><Link className="text-danger " href="url "><a className="text-decoration-none" style={{ color: "#216651" }}><b>Adicionar novo</b><AiOutlinePlusCircle className="ms-md-1 mb-1" /></a></Link></CardSubtitle>
                                <CardSubtitle className="mt-2"><Link className="text-danger " href="url "><a className="text-decoration-none" style={{ color: "#216651" }}><b>Todos</b></a></Link></CardSubtitle>
                            </CardBody>
                        </Card></Col>
                    <Col className="mt-4">
                        <Card className="border-2" style={{ borderColor: "#74BAA0" }}>
                            <CardBody>
                                <CardTitle tag="h4" style={{ color: "#216651", backgroundColor: "#eff8f1", textAlign: "center" }}><GiRemedy className="m-3" color="#216651" size="40px" />Medicações - 2</CardTitle>
                                <CardSubtitle className="mt-4"><Link className="text-danger " href="url "><a className="text-decoration-none" style={{ color: "#216651" }}><b>Adicionar novo</b><AiOutlinePlusCircle className="ms-md-1 mb-1" /></a></Link></CardSubtitle>
                                <CardSubtitle className="mt-2"><Link className="text-danger " href="url "><a className="text-decoration-none" style={{ color: "#216651" }}><b>Todos</b></a></Link></CardSubtitle>
                            </CardBody>
                        </Card></Col>
                </Row>
                <div className="center">
                    <Button color="secondary" className="mt-5" size="lg" block style={{ background: "#216651", color: "white" }}>Concluir evento</Button>{' '}
                </div>
            </Container>
        )
    }
}
