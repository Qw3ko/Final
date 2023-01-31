import React, { Component } from 'react'
import { Table, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class Case3 extends Component {
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
              <td>11.12.22 12:10</td>
              <td>13.12.22 15:50</td>
              <td>5324589</td>
              <td>Богатько Андрей Викторович</td>
              <td>Спортивный</td>
              <td>Зеленый</td>
              <td>09.12.22 17:48</td>
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
