import React, { Component } from 'react'
import { Table, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class Case5 extends Component {
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
              <td>23.09.22 15:31</td>
              <td>29.09.22 18:05</td>
              <td>1280945</td>
              <td>Шустрин Анатолий Вячаслалович</td>
              <td>Гибрид</td>
              <td>Черный</td>
              <td>20.09.22 13:29</td>
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
