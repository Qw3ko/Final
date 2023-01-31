import React, { Component } from 'react'
import { Table, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class Officer2 extends Component {
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
                            <td>2321468</td>
                            <td>mick.potap@gmail.com</td>
                            <td>Потапенко Михаил</td>
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
