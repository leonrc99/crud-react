import React, { useState, useEffect } from "react";

function RegisterForms(props) {

    // variaveis de captura de dados

    const initialValues = {
        fullName: '',
        tellphone: '',
        email: '',
        city: ''
    }

    let [values, setValues] = useState(initialValues);

    useEffect( () => {
        if(props.currentId === ''){
            setValues({
                ...initialValues
            })
        } else {
            setValues({
                ...props.dataPatients[props.currentId]
            })
        }
    }, [props.currentId, props.dataPatients])

    const inputChange = e => {
        let { name, value } = e.target

        setValues({
            ...values,
            [name]: value
        })
    }

    const formSend = e => {
        e.preventDefault()
        props.addEdit(values)
    }

    return (
        <form autoComplete="off" onSubmit={formSend}>

            <div className="form-group input-group">
                <div className="input-grou-prepend">
                    <div className="input-group-text">
                        <i className="fas fa-user"></i>
                    </div>
                </div>

                <input className="form-control" placeholder="Nome Completo" name="fullName" value={values.fullName} onChange={inputChange} />
            </div>

            <div className="row">

                <div className="form-group input-group col-md-6">
                    <div className="input-grou-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-envelope"></i>
                        </div>
                    </div>

                    <input className="form-control" placeholder="E-mail" name="email" value={values.email} onChange={inputChange} />
                </div>


                <div className="form-group input-group col-md-6">
                    <div className="input-grou-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-mobile-alt"></i>
                        </div>
                    </div>

                    <input className="form-control" placeholder="Telefone" name="tellphone" value={values.tellphone} onChange={inputChange} />

                </div>
            </div>
            <div className="form-group">
                <textarea className="form-control" placeholder="Cidade" name="city" value={values.city} onChange={inputChange} />
            </div>

            <div className="form-group">
                <input type="submit" value={ props.currentId == '' ? 'Salvar' : 'Atualizar'} className="btn btn-info btn-block" />
            </div>

        </form>
    )
}

export default RegisterForms