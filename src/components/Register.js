import React, { useState, useEffect } from "react";
import RegisterForms from "./RegisterForms";
import fireDb from "../firebase"

function Register() {

    let [dataPatients, setDataPatients] = useState({})

    useEffect(() => {
        fireDb.child('patients').on('value', dbPrint => {
            if (dbPrint.val() != null) {
                setDataPatients({
                    ...dbPrint.val()
                })
            }
        })
    }, [])

    const addEdit = obj => {
        fireDb.child('patients').push(
            obj,
            err => {
                if (err) {
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
                <div className="col-md-7">
                    <table className="table table-bodeless table-stripper">
                        <thead className="thead-light">
                            <tr>
                                <td>Nome</td>
                                <td>Telefone</td>
                                <td>E-mail</td>
                                <td>Endereço</td>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                Object.keys(dataPatients).map(id => {
                                    return <tr key={id}>
                                        <td> {dataPatients[id].fullName} </td>
                                        <td> {dataPatients[id].tellphone} </td>
                                        <td> {dataPatients[id].email} </td>
                                        <td> {dataPatients[id].address} </td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Register