import React, { Component } from 'react'
import { Table, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class Case4 extends Component {
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
              <td>05.10.22 18:37</td>
              <td>13.11.22 10:21</td>
              <td>3263472</td>
              <td>Низовцин Владимир Александрович</td>
              <td>Дорожный (городской)</td>
              <td>Голубой</td>
              <td>05.10.22 20:11</td>
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
