import React, { useState } from "react";

function RegisterForms(props) {

    // variaveis de captura de dados

    const initialValues = {
        fullName: '',
        tellphone: '',
        email: '',
        address: ''
    }

    let [values, setValues] = useState(initialValues);

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
                <textarea className="form-control" placeholder="Endereço" name="address" value={values.address} onChange={inputChange} />
            </div>

            <div className="form-group">
                <input type="submit" value="Salvar" className="btn btn-primary btn-block" />
            </div>

        </form>
    )
}

export default RegisterForms