import React, { useState } from "react";
import validator from 'validator';
import Form from 'react-bootstrap/Form';
import { Button } from "react-bootstrap";
import "../index.css";

export default function RegistrationForm() {

    const [register, setRegister] = useState(() => {
        return {
            email: "",
            password: "",
            name: "",
            surname: "",
            clientId: "",
        }
    })

    const changeInputRegister = event => {
        event.persist()
        setRegister(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.value,
            }
        })
    }


    const submitChackin = event => {
        event.preventDefault();
        if (!validator.isEmail(register.email)) {
            alert("Вы не ввели E-mail")
        } else if (!register.name || !register.password || !register.surname || !register.clientId) {
            alert("Одно из значений отсутсвует")
        } else {

            const user = {
                email: register.email,
                password: register.password,
                name: register.name,
                surname: register.surname,
                clientId: register.clientId,
            }

            console.log(user)
        }

    }

    return (
        <Form onSubmit={submitChackin} style={{ margin: "15px", marginTop: "25px", }}>
            <Form.Group className="mb-3">
                <Form.Label>E-mail</Form.Label>
                <Form.Control type="email" id="email" name="email" value={register.email} onChange={changeInputRegister} placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Пароль</Form.Label>
                <Form.Control type="password" id="password" name="password" value={register.password} onChange={changeInputRegister} placeholder="Пароль" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Имя</Form.Label>
                <Form.Control type="text" id="name" name="name" value={register.name} onChange={changeInputRegister} placeholder="Имя" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Фамилия</Form.Label>
                <Form.Control type="text" id="surname" name="surname" value={register.surname} onChange={changeInputRegister} placeholder="Фамилия" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Client ID</Form.Label>
                <Form.Control type="text" id="clientId" name="clientId" value={register.clientId} onChange={changeInputRegister} placeholder="Client ID" />
            </Form.Group>
            <Button style={{ marginLeft: "45%" }} variant="primary" type="submit">
                Отправить
            </Button>
        </Form>
    )
}