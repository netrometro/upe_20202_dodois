import { Component } from "react";
import {
    Button,
    FormGroup,
    Label,
    Input,
    Container,
    ListGroup,
    ListGroupItem,
    Row,
    Col,
    Modal,
    ButtonGroup
} from "reactstrap";
import { BsPencil } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import { MdPersonAdd } from "react-icons/md";

export class NovoParente extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <FormGroup className="p-2 mb-3">
                    <Label><p><strong>Nome:</strong></p></Label>
                    <Input type="text"></Input>
                </FormGroup>
                <FormGroup className="p-2 mb-3">
                    <Label><p><strong>Tipo de parentesco:</strong></p></Label>
                    <Input type="select">
                        <option>MASCULINO</option>
                        <option>FEMININO</option>
                        <option>OUTROS</option>
                    </Input>
                </FormGroup>
                <FormGroup className="p-2 mb-3">
                    <Label><p><strong>Data de nascimento:</strong></p></Label>
                    <Input type="date"></Input>
                </FormGroup>
                <FormGroup className="p-2 mb-3">
                    <Label><p><strong>Peso:</strong></p></Label>
                    <Input type="number"></Input>
                </FormGroup>
                <FormGroup className="p-2 mb-3">
                    <Label><p><strong>Altura:</strong></p></Label>
                    <Input type="number"></Input>
                </FormGroup>
                <FormGroup className="p-2 mb-3">
                    <Label><p><strong>Tipo de parentesco:</strong></p></Label>
                    <Input type="select">
                        <option>IRMÃO</option>
                        <option>IRMÃ</option>
                        <option>FILHA</option>
                        <option>FILHO</option>
                        <option>PAI</option>
                        <option>MÃE</option>
                        <option>AVÓ</option>
                        <option>AVÔ</option>
                        <option>TIO</option>
                        <option>TIA</option>
                        <option>FAMILIAR</option>
                        <option>CONHECIDO</option>
                        <option>VIZINHO</option>
                    </Input>
                </FormGroup>
                <Button onClick={this.props.onToggleParente}>Confirmar</Button>
            </>
        )
    }
}

export class ApagarParente extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="p-1 row">
                <p><strong>Deseja apagar o parente:</strong></p>
                <ButtonGroup>
                    <Button color="success" onClick={this.props.onToggle}>Sim</Button>
                    <Button color="danger" onClick={this.props.onToggle}>Não</Button>
                </ButtonGroup>
            </div>
        )
    }
}

export default class Parentes extends Component {

    constructor(props) {
        super(props);
        this.state = {
            toggle: false,
            toggleApagar: false,
            parentes: [
                {
                    nome: "(Cuidador - você) João"
                },
                {
                    nome: "(Irmã) Maria"
                },
                {
                    nome: "(Tio) Jubileu"
                }
            ]
        }
        this.onToggle = this.onToggle.bind(this);
        this.onToggleApagar = this.onToggleApagar.bind(this);
    }


    onToggle() {
        this.setState({ toggle: !this.state.toggle });
    }

    onToggleApagar() {
        this.setState({ toggleApagar: !this.state.toggleApagar });
    }

    render() {
        return (
            <Container>
                <h4 className="text-center mt-5"><strong>Parentes</strong></h4>
                <ListGroup>
                    <Row className="d-flex justify-content-center">
                        <Col sm="8">
                            {this.state.parentes.map((parente, x) =>
                                <ListGroupItem key={x}>
                                    <Row>
                                        <Col sm="8">
                                            <p>{parente.nome}</p>
                                        </Col>
                                        <Col sm="4">
                                            <BsPencil onClick={this.onToggle} className="m-1" size="25px" />
                                            <AiFillDelete onClick={this.onToggleApagar} className="m-1" size="25px" />
                                        </Col>
                                    </Row>
                                </ListGroupItem>
                            )}
                            <ListGroupItem color="secondary" className="text-center" size="lg">
                                <Button onClick={this.onToggle}>Adicionar novo parente <MdPersonAdd className="m-1" size="25px" /></Button>
                            </ListGroupItem>
                        </Col>
                        <Modal isOpen={this.state.toggle}>
                            <NovoParente onToggleParente={this.onToggle} />
                        </Modal>
                        <Modal isOpen={this.state.toggleApagar}>
                            <ApagarParente onToggle={this.onToggleApagar} />
                        </Modal>
                    </Row>
                </ListGroup>
            </Container>
        )
    }
}