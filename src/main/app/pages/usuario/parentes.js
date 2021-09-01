import { Component } from "react";
import MenuUsuario from "../../components/menuUsuario";
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
import Swal from "sweetalert2";

export class NovoParente extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
            <div className="text-center p-2" style={{backgroundColor:"#216651", color:"#fff"}}>Editar</div>
            <div className="m-3" style={{ color: "#216651" }}>
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
            </div>
            <Button  onClick={this.props.onToggleParente} className="m-3" style={{background:"#216651", color:"white", borderColor:"#74BAA0"}}>Confirmar</Button>
            </>
        )
    }
}

export default class Parentes extends Component {

    constructor(props) {
        super(props);
        this.state = {
            toggle: false,
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
    }


    onToggle() {
        this.setState({ toggle: !this.state.toggle });
    }

    onDeletar(){
        Swal.fire({
            title: "Deletar Parente",
            text: "Deseja realmente apagar este parente?",

            showCancelButton: true,
            cancelButtonColor: "#ca0909",
            confirmButtonColor: "#216651",
            confirmButtonText: "Sim",
            cancelButtonText: "Não",
          }).then((result) => {
            if (result.isConfirmed) {
                
            }else{

            }
        })
    }

    render() {
        return (
            <div>

           
            <MenuUsuario />
            <Container>
                <h3 className="mt-5 mb-3 d-flex justify-content-center" style={{ color: "#216651" }}><strong>Parentes</strong></h3>
                <ListGroup>
                    <Row className="d-flex justify-content-center" >
                        <Col sm="8" >
                            {this.state.parentes.map((parente, x) =>
                                <ListGroupItem key={x}  style={{ color: "#216651" }}>
                                    <Row>
                                        <Col sm="8" className="pt-3">
                                            <p>{parente.nome}</p>
                                        </Col>
                                        <Col sm="4" className="d-flex justify-content-end pt-3">
                                            <BsPencil onClick={this.onToggle} className="m-1" size="25px" />
                                            <AiFillDelete onClick={this.onDeletar} className="m-1" size="25px" />
                                        </Col>
                                    </Row>
                                </ListGroupItem>
                            )}
                            <ListGroupItem className="text-center" size="lg" style={{background:"#eff8f1"}}>
                                <Button onClick={this.onToggle} style={{background:"#216651", color:"white", borderColor:"#74BAA0"}}>Adicionar novo parente <MdPersonAdd className="m-1" size="25px" /></Button>
                            </ListGroupItem>
                        </Col>
                        <Modal isOpen={this.state.toggle}>
                            <NovoParente onToggleParente={this.onToggle} />
                        </Modal>
                    </Row>
                </ListGroup>
            </Container>
            </div>
        )
    }
}