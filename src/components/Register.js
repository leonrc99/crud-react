import React from "react";
import RegisterForms from "./RegisterForms";
import fireDb from "../firebase"

function Register() {

    const addEdit = obj => {
        fireDb.child('patients').push(
            obj,
            err => {
                if(err) {
                    console.log(err)
                }
            }        
        );
    }

    return (

        <div>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Cadastro de Pacientes</h1>
                    <p className="lead">Faça aqui o cadastro de pacientes</p>
                </div>
            </div>

            <div className="row">
                <div className="col-md-5">
                    <RegisterForms addEdit={addEdit} />
                </div>
                <div>
                    <h2>Lista de Pacientes</h2>
                </div>
            </div>
        </div>
    )
}

export default Register