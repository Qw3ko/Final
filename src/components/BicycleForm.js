import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FloatingLabel } from "react-bootstrap";
import { Button } from "react-bootstrap";
import MyApp from "./DatePicker";

export default function BicycleForm() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit} style={{ margin: "15px", marginTop: "25px" }}>
            <InputGroup size="sm" className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-sm">Номер лицензии</InputGroup.Text>
                <Form.Control
                    required
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                />
                <Form.Control.Feedback type="invalid">
                    Требуется лицензия велосипеда.
                </Form.Control.Feedback>
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text>ФИО</InputGroup.Text>
                <Form.Control required aria-label="Фамилия" />
                <Form.Control required aria-label="Имя" />
                <Form.Control required aria-label="Отчество" />
                <Form.Control.Feedback type="invalid">
                    Одно из значений отстутсвует.
                </Form.Control.Feedback>
            </InputGroup>
            <Form.Select required>
                <option value="">Тип велосипеда</option>
                <option value="1">Дорожный (городской)</option>
                <option value="2">Шоссейный</option>
                <option value="3">Гибрид</option>
            </Form.Select>
            <br />
            <Form.Label htmlFor="exampleColorInput">Цвет велосипеда</Form.Label>
            <Form.Control
                type="color"
                id="exampleColorInput"
                defaultValue="#563d7c"
                title="Выберете цвет"
            />
            <br />
            Дата кражи
            <MyApp />
            <br />
            <FloatingLabel controlId="floatingTextarea2" label="Дополнительная информация">
                <Form.Control
                    as="textarea"
                    placeholder="Оставте дополнительную информацию здесь"
                    style={{ height: '100px' }}
                />
            </FloatingLabel>
            <br />
            <Button style={{ marginLeft: "42%" }} variant="primary" type="submit">
                Отправить
            </Button>
        </Form>
    )
}