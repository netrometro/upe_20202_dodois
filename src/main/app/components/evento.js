import { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import { Button } from 'reactstrap';
import Link from "next/link";

export default class Evento extends Component {

    render() {
        return (
            <Container>
                <Row xs="2" className="mt-3">
                    <Col><Card>
                        <CardBody>
                            <CardTitle>Sintomas - 10</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Adicionar novo</CardSubtitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Todos</CardSubtitle>
                        </CardBody>
                    </Card>
                    </Col>
                    <Col><Card>
                        <CardBody>
                            <CardTitle>Lembretes - 10</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Adicionar novo</CardSubtitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Todos</CardSubtitle>
                        </CardBody>
                    </Card></Col>
                    <Col className="mt-3"><Card>
                        <CardBody>
                            <CardTitle>Diagnósticos - 1</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Adicionar novo</CardSubtitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Todos</CardSubtitle>
                        </CardBody>
                    </Card></Col>
                    <Col className="mt-3"><Card>
                        <CardBody>
                            <CardTitle>Medicações - 2</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Adicionar novo</CardSubtitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Todos</CardSubtitle>
                        </CardBody>
                    </Card></Col>
                </Row>
                <div className="center">
                    <Button color="secondary" className="mt-3" size="lg" block >Concluir evento</Button>{' '}
                </div>                
            </Container>
        )
    }
}
