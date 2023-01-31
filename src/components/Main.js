import React, { Component } from "react";
import BicycleForm from "../components/BicycleForm";
import Line from "./Line.svg";
import Clipboard from "./Clipboard.svg";
import Server from "./Server.svg";
import MagGlass from "./MagGlass.svg";
import '../index.css';

const paragraphStyle = {
    fontFamily: "Manrope, sans-serif",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "20px",
    lineHeight: "27px",
    textAlign: "center",
}

export default class Main extends Component {
    render() {
        return (
            <section className="sectionStyle">
                <h1 className="textStyle">Как это работает</h1>
                <img className="line" src={Line} alt="line"></img>
                <div className="box">
                    <div className="item">
                        <img className="clipboard" src={Clipboard} alt="Clipboard"></img>
                        <p style={paragraphStyle}>Вы заполняете подробную форму, указывая данные об велосипеде.</p>
                    </div>
                    <div className="item">
                        <img style={{ marginLeft: "25%", marginBottom: "20px" }} src={Server} alt="Server"></img>
                        <p style={paragraphStyle}>Данные попадают в нашу базу данных.</p>
                    </div>
                    <div className="item">
                        <img style={{ marginLeft: "25%", marginBottom: "20px" }} src={MagGlass} alt="MagGlass"></img>
                        <p style={paragraphStyle}>Мы передаем данные в правоохранительные органы, где они займутся поиском велосипеда.</p>
                    </div>
                </div>
                <h1 className="textStyle_2">Сообщить о краже</h1>
                <img className="line_2" src={Line} alt="line"></img>
                <div className="formStyle">
                    <BicycleForm />
                </div>
            </section>
        )
    }
}