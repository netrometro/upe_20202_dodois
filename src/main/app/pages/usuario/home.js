import { Component } from "react";
import {
    Container,
    Row,
    Col,
    Card,
    CardTitle,
    CardHeader,
    CardBody,
    ListGroup,
    ListGroupItem,
    NavLink,
    Button,
    ButtonGroup,
    Modal,
    FormGroup,
    Label,
    Input,
    UncontrolledPopover
} from "reactstrap";
import { RiArrowDropDownLine } from "react-icons/ri";
import { NovoParente } from "./parentes";
import MenuUsuario from "../../components/menuUsuario";

class MiniPainel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            toggleEvento: false,
            toggleParente: false
        };
        this.onToggleEvento = this.onToggleEvento.bind(this);
        this.onToggleParente = this.onToggleParente.bind(this);
    }

    onToggleEvento() {
        this.setState({ toggleEvento: !this.state.toggleEvento });
    }

    onToggleParente() {
        this.setState({ toggleParente: !this.state.toggleParente });
    }

    render() {
        return (
            <>
                <ButtonGroup className="mt-5">
                    <Button onClick={this.onToggleEvento}>Criar novo evento</Button>
                    <Button onClick={this.onToggleParente}>Adicionar novo parente</Button>
                    <Button id="PopoverClick">Mais <RiArrowDropDownLine size="20px" /></Button>
                </ButtonGroup>
                <UncontrolledPopover trigger="focus" placement="bottom" target="PopoverClick">
                    <ListGroup>
                        <ListGroupItem>
                            <NavLink href="/usuario/parentes">Parentes</NavLink>
                        </ListGroupItem>
                    </ListGroup>
                </UncontrolledPopover>

                <Modal isOpen={this.state.toggleEvento}>
                    <FormGroup className="p-2 mb-3">
                        <Label><p><strong>Selecione um parente:</strong></p></Label>
                        <Input type="select">
                            <option>Você (Jubileu)</option>
                            <option>Maria</option>
                            <option>Jubileu</option>
                        </Input>
                    </FormGroup>
                    <Button onClick={this.onToggleEvento}>Confirmar</Button>
                </Modal>
                <Modal isOpen={this.state.toggleParente}>
                    <NovoParente onToggleParente={this.onToggleParente} />
                </Modal>
            </>
        )
    }
}

class Lembretes extends Component {

    constructor(props) {
        super(props);
        this.state = {
            lembretes: [
                {
                    descricao: "Comprar dipirona",
                    data: "hoje às 08h30"
                },
                {
                    descricao: "Comprar dipirona",
                    data: "hoje às 08h30"
                },
                {
                    descricao: "Comprar dipirona",
                    data: "hoje às 08h30"
                }
            ]
        }
    }

    render() {
        return (
            <Card className="mt-5 p-1">
                <CardHeader>
                    <CardTitle className="text-center"><strong>Lembretes</strong></CardTitle>
                </CardHeader>
                <CardBody>
                    <ListGroup>
                        <ListGroupItem>
                            <Row>
                                <Col sm="6">
                                    <strong>Descrição</strong>
                                </Col>
                                <Col sm="6">
                                    <strong>Data</strong>
                                </Col>
                            </Row>
                        </ListGroupItem>
                        {this.state.lembretes.map((lembrete, x) =>
                            <ListGroupItem key={x}>
                                <Row>
                                    <Col sm="6">
                                        {lembrete.descricao}
                                    </Col>
                                    <Col sm="6">
                                        {lembrete.data}
                                    </Col>
                                </Row>
                            </ListGroupItem>
                        )}
                    </ListGroup>
                    <NavLink href="/usuario/lembretes">Ver todos</NavLink>
                </CardBody>
            </Card>
        )
    }
}

class Eventos extends Component {

    constructor(props) {
        super(props);
        this.state = {
            eventos: [
                {
                    parente: "Você (Jubileu)",
                    data: "13/02/2019"
                },
                {
                    parente: "Você (Jubileu)",
                    data: "13/02/2019"
                },
                {
                    parente: "Você (Jubileu)",
                    data: "13/02/2019"
                }
            ]
        }
    }

    render() {
        return (
            <Card className="mt-5 p-1">
                <CardHeader>
                    <CardTitle className="text-center"><strong>Eventos em andamento</strong></CardTitle>
                </CardHeader>
                <CardBody>
                    <ListGroup>
                        <ListGroupItem>
                            <Row>
                                <Col sm="6">
                                    <strong>Parente</strong>
                                </Col>
                                <Col sm="6">
                                    <strong>Data de início</strong>
                                </Col>
                            </Row>
                        </ListGroupItem>
                        {this.state.eventos.map((evento, x) =>
                            <ListGroupItem key={x}>
                                <Row>
                                    <Col sm="6">
                                        {evento.parente}
                                    </Col>
                                    <Col sm="6">
                                        {evento.data}
                                    </Col>
                                </Row>
                            </ListGroupItem>
                        )}
                    </ListGroup>
                    <NavLink href="/usuario/eventos">Ver todos</NavLink>
                </CardBody>
            </Card>
        )
    }
}

class Historico extends Component {

    constructor(props) {
        super(props);
        this.state = {
            historico: [
                {
                    parente: "Você (Jubileu)",
                    periodo: "13/02/2019 à 13/04/2019"
                },
                {
                    parente: "Você (Jubileu)",
                    periodo: "13/02/2019 à 13/04/2019"
                },
                {
                    parente: "Você (Jubileu)",
                    periodo: "13/02/2019 à 13/04/2019"
                }
            ]
        }
    }

    render() {
        return (
            <Card className="mt-5 p-1">
                <CardHeader>
                    <CardTitle className="text-center"><strong>Histórico</strong></CardTitle>
                </CardHeader>
                <CardBody>
                    <ListGroup>
                        <ListGroupItem>
                            <Row>
                                <Col sm="6">
                                    <strong>Parente</strong>
                                </Col>
                                <Col sm="6">
                                    <strong>Período</strong>
                                </Col>
                            </Row>
                        </ListGroupItem>
                        {this.state.historico.map((evento, x) =>
                            <ListGroupItem key={x}>
                                <Row>
                                    <Col sm="6">
                                        {evento.parente}
                                    </Col>
                                    <Col sm="6">
                                        {evento.periodo}
                                    </Col>
                                </Row>
                            </ListGroupItem>
                        )}
                    </ListGroup>
                    <NavLink href="/usuario/historico">Ver todos</NavLink>
                </CardBody>
            </Card>
        )
    }
}

class Diagnosticos extends Component {

    constructor(props) {
        super(props);
        this.state = {
            diagnosticos: [
                {
                    parente: "Você (Jubileu)",
                    descricao: "Covid-19",
                    mes: "Abril"
                },
                {
                    parente: "Você (Jubileu)",
                    descricao: "Covid-19",
                    mes: "Abril"
                },
                {
                    parente: "Você (Jubileu)",
                    descricao: "Covid-19",
                    mes: "Abril"
                }
            ]
        }
    }

    render() {
        return (
            <Card className="mt-5 p-1">
                <CardHeader>
                    <CardTitle className="text-center"><strong>Diagnósticos recentes</strong></CardTitle>
                </CardHeader>
                <CardBody>
                    <ListGroup>
                        <ListGroupItem>
                            <Row>
                                <Col sm="4">
                                    <strong>Parente</strong>
                                </Col>
                                <Col sm="4">
                                    <strong>Descrição</strong>
                                </Col>
                                <Col sm="4">
                                    <strong>Mês</strong>
                                </Col>
                            </Row>
                        </ListGroupItem>
                        {this.state.diagnosticos.map((lembrete, x) =>
                            <ListGroupItem key={x}>
                                <Row>
                                    <Col sm="4">
                                        {lembrete.parente}
                                    </Col>
                                    <Col sm="4">
                                        {lembrete.descricao}
                                    </Col>
                                    <Col sm="4">
                                        {lembrete.mes}
                                    </Col>
                                </Row>
                            </ListGroupItem>
                        )}
                    </ListGroup>
                    <NavLink href="/usuario/diagnosticos">Ver todos</NavLink>
                </CardBody>
            </Card>
        )
    }
}

export default class Home extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
            <MenuUsuario/>
                <Container>
                    <Row>
                        <MiniPainel />
                    </Row>
                    <Row>
                        <Col sm="6">
                            <Lembretes />
                        </Col>
                        <Col sm="6">
                            <Eventos />
                        </Col>
                        <Col sm="6">
                            <Diagnosticos />
                        </Col>
                        <Col sm="6">
                            <Historico />
                        </Col>
                    </Row>
                </Container>
                <footer className="muito-texto" >
                    <p style={{ marginTop: "10px" }}>&copy; Todos os Direitos Reservados</p>
                </footer>
            </>
        )
    }
}