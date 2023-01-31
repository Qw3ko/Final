import React, { Component } from 'react'
import { Table, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class Officer1 extends Component {
    render() {
        return (
            <>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>ClientID</th>
                            <th>Email</th>
                            <th>ФИ Сотрудника</th>
                            <th>Одобренность сотрудника</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>2547395</td>
                            <td>murikov.serg@mail.ru</td>
                            <td>Муриков Сергей</td>
                            <td><Form>
                                <Form.Check
                                    label={`Одобрен`}
                                />
                            </Form></td>
                        </tr>
                    </tbody>
                </Table>
                <Link style={{ marginLeft: '50%' }} to="/officers">
                    <Button>
                        Назад
                    </Button>
                </Link>
            </>
        )
    }
}
