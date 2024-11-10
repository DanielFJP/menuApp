import React, { useContext } from "react";
import "./Shots.css";
import MobileContent from "../../components/MobileContent";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { CartContext } from "../../components/CartContext";

import shot_jack from "../../img/shots/shot_jack.png";
import shot_fire from "../../img/shots/shot_fire.png";
import shot_honey from "../../img/shots/shot_honey.png";
import shot_apple from "../../img/shots/shot_apple.png";
import shot_jager from "../../img/shots/shot_jager.png";

const shots = [
    {
        id: 1,
        img: shot_jack,
        titulo: "Shot Jack Daniel's Old N0.7",
        precio: "$12.000",
    },
    {
        id: 2,
        img: shot_fire,
        titulo: "Shot Jack Daniel's Fire",
        precio: "$12.000",
    },
    {
        id: 3,
        img: shot_honey,
        titulo: "Shot Jack Daniel's Honey",
        precio: "$12.000",
    },
    {
        id: 4,
        img: shot_apple,
        titulo: "Shot Jack Daniel's Apple",
        precio: "$12.000",
    },
    {
        id: 5,
        img: shot_jager,
        titulo: "Shot Jägermeister",
        precio: "$9.000",
    },
];

export default function () {

const { addToCart } = useContext(CartContext);

    return (
        <div>
            <MobileContent />

            <div className="contenido">
                <Row xs={2} md={2} className="g-4 m-1">
                    {shots.map((producto) => (
                        <Col key={producto.id}>
                            <Card>
                                <div className="cardd_shots">
                                    <div className="image_shots">
                                        <img
                                            src={producto.img}
                                            alt={producto.titulo}
                                        />
                                    </div>
                                    <div className="text_shots">
                                        <span>{producto.titulo}</span>
                                        <p>{producto.precio}</p>
                                    </div>
                                    <button
                                        className="ordenar-btn"
                                        onClick={() => addToCart(producto)}>
                                        Ordenar
                                    </button>
                                </div>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
}
