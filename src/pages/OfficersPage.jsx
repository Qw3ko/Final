import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class OfficersPage extends Component {
    render() {
        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ФИ сотрудника</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Муриков Сергей</td>
                        <td><Link to="/officers/6789">Подробнее...</Link></td>
                    </tr>
                    <tr>
                        <td>Потапенко Михаил</td>
                        <td><Link to="/officers/3427">Подробнее...</Link></td>
                    </tr>
                    <tr>
                        <td>Новикова Ксения</td>
                        <td><Link to="/officers/7295">Подробнее...</Link></td>
                    </tr>
                </tbody>
            </Table>
        )
    }
}
