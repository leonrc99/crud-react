import React, { useState, useEffect } from "react";
import RegisterForms from "./RegisterForms";
import fireDb from "../firebase"

import "./Register.css"

function Register() {

    let [dataPatients, setDataPatients] = useState({})

    let [currentId, setCurrentId] = useState('')

    useEffect(() => {
        fireDb.child('patients').on('value', dbPrint => {
            if (dbPrint.val() != null) {
                setDataPatients({
                    ...dbPrint.val()
                })
            } else {
                setDataPatients({})
            }
        })
    }, [])

    const addEdit = obj => {

        if(currentId == ''){
            fireDb.child('patients').push(
                obj,
                err => {
                    if (err) {
                        console.log(err)
                    }
                }
            );
        } else {
            fireDb.child(`/patients/${currentId}`).set(
                obj,
                err => {
                    if(err){
                        console.log(err)
                    }
                }
            )
        }

    }

    const deletePatient = key => {
        if(window.confirm('Deseja realmente deletar este cadastro?')){
            fireDb.child(`patients/${key}`).remove(
                err => {
                    if(err){
                        console.log(err)
                    }
                }
            )
        }
    }

    return (

        <div>
            <div className="jumbotron jumbotron-fluid">
                <div className="container col-md-10 offset-md-1">
                    <h1 className="display-4 ">Cadastro de Pacientes</h1>
                    <p className="lead">Faça aqui o cadastro de pacientes</p>
                </div>
            </div>

            <div className="row col-md-10 offset-md-1">
                <div className="col-md-5">
                    <RegisterForms {...({addEdit, currentId, dataPatients})} />
                </div>
                <div className="col-md-7">
                    <table className="table table-bodeless table-stripper">
                        <thead className="thead-light">
                            <tr>
                                <td>Nome</td>
                                <td>Telefone</td>
                                <td>E-mail</td>
                                <td>Ações</td>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                Object.keys(dataPatients).map(id => {
                                    return <tr key={id}>
                                        <td> {dataPatients[id].fullName} </td>
                                        <td> {dataPatients[id].tellphone} </td>
                                        <td> {dataPatients[id].email} </td>

                                        <td>
                                            <a className="btn btn-info">
                                                <i className="fas fa-cog fa-pencil-alt" onClick={ () => {setCurrentId(id)} }></i>
                                            </a>
                                            <a className="btn btn-danger">
                                                <i className="fas fa-cog fa-trash-alt" onClick={ () => deletePatient(id) }></i>
                                            </a>
                                        </td>
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