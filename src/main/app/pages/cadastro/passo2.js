import { Component } from "react";
import Menu from "/components/menu";
import { FormGroup, Input} from 'reactstrap';



export default class Passo1 extends Component {
    render() {
        return (
            <>
                <Menu />
                <div className="container-fluid d-flex justify-content-center" style={{width:"auto"}}>
                    <div className="row col-sm-6 p-3">
                        <h3 className="mt-8 text-center" style={{color:"#216651"}}><b>Conclua seu cadastro</b></h3>
                        <div className="mb-3">
                            <label className="form-label" style={{color:"#216651"}}>Nome</label>
                            <input type="email" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label" style={{color:"#216651"}}>Email</label>
                            <input type="password" className="form-control" />
                        </div>
                        <div className="col-sm-6 p-3">
                            <label className="form-label" style={{color:"#216651"}}>Nascimento</label>
                            <input style={{minwidth:"280px",color:"#216651"}} type="date" className="form-control" />
                        </div>
                        <div className="col-sm-6 p-3">
                            <FormGroup>
                            <label className="form-label" style={{color:"#216651"}}>Sexo</label>
                                <Input style={{minwidth:"280px", color:"#216651"}} type="select" name="select" id="exampleSelect">
                                    <option>Masculino</option>
                                    <option>Feminino</option>
                                </Input>
                            </FormGroup>
                        </div>
                        <div className="col-sm-6 p-3">
                            <label className="form-label" style={{color:"#216651"}}>Altura</label>
                            <input style={{minwidth:"280px"}} type="password" className="form-control" />
                        </div>
                        <div className="col-sm-6 p-3">
                            <label className="form-label" style={{color:"#216651"}}>Peso</label>
                            <input style={{minwidth:"280px"}} type="password" className="form-control" />
                        </div>
                        <button className="btn mt-5" style={{background:"#216651", color:"white"}}>Finalizar</button>
                    </div>
                </div>
            </>
        )
    }
}
