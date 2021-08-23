import { Component } from "react";
import Menu from "/components/menu";
import { FormGroup, Input} from 'reactstrap';

export default class Passo1 extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <>
                <Menu />
                <div className="container-fluid d-flex justify-content-center">
                    <div className="row col-sm-6 p-3">
                        <h3 className="mt-8 text-center">Conclua seu cadastro</h3>
                        <div className="mb-3">
                            <label className="form-label">Nome</label>
                            <input type="email" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="password" className="form-control" />
                        </div>
                        <div className="col-sm-6 p-3">
                            <label className="form-label">Data de Nascimento</label>
                            <input style={{width:"280px"}} type="date" className="form-control" />
                        </div>
                        <div className="col-sm-6 p-3">
                            <FormGroup>
                            <label className="form-label">Sexo</label>
                                <Input style={{width:"280px"}} type="select" name="select" id="exampleSelect">
                                    <option>Masculino</option>
                                    <option>Feminino</option>
                                </Input>
                            </FormGroup>
                        </div>
                        <div className="col-sm-6 p-3">
                            <label className="form-label">Altura</label>
                            <input style={{width:"280px"}} type="password" className="form-control" />
                        </div>
                        <div className="col-sm-6 p-3">
                            <label className="form-label">Peso</label>
                            <input style={{width:"280px"}} type="password" className="form-control" />
                        </div>
                        
                        <button className="btn btn-secondary">Finalizar</button>
                    </div>
                </div>
            </>
        )
    }
}
