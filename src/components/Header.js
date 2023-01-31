import React, { Component } from "react";
import Background from "./bicycles.png";
import '../index.css'

const sectionStyle = {
    backgroundImage: `url(${Background})`,
    height: "700px"
}

const textStyle = {
    marginLeft: "30px",
    marginTop: "30px",
    fontFamily: "Manrope, sans-serif",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "36px",
    lineHeight: "49px",
    color: "#000000",
}

const paragraphStyle = {
    marginLeft: "30px",
    marginTop: "30px",
    fontFamily: "Manrope, sans-serif",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "20px",
    lineHeight: "27px",
    color: "#000000",
}


export default class Header extends Component {
    render() {
        return (
            <section className="section" style={sectionStyle}>
                <div className="divStyle"><h1 style={textStyle}>Сервис для сообщения о краже велосипедов</h1>
                    <h5 style={paragraphStyle}>Этот сервис поможет вам сообщить о краже велосипедов компании “ВелоТрейн”.
                        Все данные которые вы сообщаете попадают в нашу базу розыска, которые мы передаем правоохранительным органам.</h5>
                </div>
            </section>
        )
    }
}