import { Component } from "react";
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import '../index.css'

export default class ReportPage extends Component {
    render() {
        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Номер лицензии</th>
                        <th>ФИО клиента</th>
                        <th>Тип велосипеда</th>
                        <th>Цвет велосипеда</th>
                        <th>Дата кражи</th>
                        <th>Дополнительная информация</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>83t25jhkbfyj</td>
                        <td>Чусовитин Алексей Дмитреевич</td>
                        <td>Дорожный (городской)</td>
                        <td>Красный</td>
                        <td>10.01.23</td>
                        <td></td>
                        <td><Link to="/cases/43453">Подробнее...</Link></td>
                    </tr>
                    <tr>
                        <td>89i65nbjfekf</td>
                        <td>Васнецова Тамара Викторовна</td>
                        <td>Спортивный</td>
                        <td>Черный</td>
                        <td>10.11.22</td>
                        <td></td>
                        <td><Link to="/cases/47676">Подробнее...</Link></td>
                    </tr>
                    <tr>
                        <td>35z12hrjitcs</td>
                        <td>Богатько Андрей Викторович</td>
                        <td>Спортивный</td>
                        <td>Зеленый</td>
                        <td>09.12.22</td>
                        <td></td>
                        <td><Link to="/cases/65645">Подробнее...</Link></td>
                    </tr>
                    <tr>
                        <td>67d09cvbgfrh</td>
                        <td>Низовцин Владимир Александрович</td>
                        <td>Дорожный (городской)</td>
                        <td>Голубой</td>
                        <td>05.10.22</td>
                        <td></td>
                        <td><Link to="/cases/44345">Подробнее...</Link></td>
                    </tr>
                    <tr>
                        <td>78k34jkitrvb</td>
                        <td>Шустрин Анатолий Вячаслалович</td>
                        <td>Гибрид</td>
                        <td>Черный</td>
                        <td>20.09.22</td>
                        <td></td>
                        <td><Link to="/cases/65644">Подробнее...</Link></td>
                    </tr>
                </tbody>
            </Table>
        )
    }
}