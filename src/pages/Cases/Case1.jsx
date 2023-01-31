import React, { Component } from 'react'
import { Button, Table, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class Case1 extends Component {
    render() {
        return (
            <>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Создан</th>
                            <th>Обновлен</th>
                            <th>ID клиента</th>
                            <th>ФИО клиента</th>
                            <th>Тип велосипеда</th>
                            <th>Цвет велосипеда</th>
                            <th>Дата кражи</th>
                            <th>Дополнительная информация</th>
                            <th>Завершающий комментарий</th>
                            <th>Статус</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>11.01.23 16:45</td>
                            <td>12.01.23 10:10</td>
                            <td>42432455</td>
                            <td>Чусовитин Алексей Дмитреевич</td>
                            <td>Дорожный (городской)</td>
                            <td>Красный</td>
                            <td>10.01.23 15:32</td>
                            <td></td>
                            <td></td>
                            <td><Form>
                                <Form.Check
                                    label={`Завершен`}
                                />
                            </Form></td>
                        </tr>
                    </tbody>
                </Table>
                <Link style={{marginLeft: '50%'}} to="/cases">
                    <Button>
                        Назад
                    </Button>
                </Link>
            </>
        )
    }
}
