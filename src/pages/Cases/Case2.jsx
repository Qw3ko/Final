import React, { Component } from 'react'
import { Table, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class Case2 extends Component {
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
                            <td>10.11.22 12:10</td>
                            <td>10.11.22 15:50</td>
                            <td>64784534</td>
                            <td>Васнецова Тамара Викторовна</td>
                            <td>Дорожный (городской)</td>
                            <td>Спортивный</td>
                            <td>10.11.22 10:19</td>
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
                <Link style={{ marginLeft: '50%' }} to="/cases">
                    <Button>
                        Назад
                    </Button>
                </Link>
            </>
        )
    }
}
