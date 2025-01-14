import React, { useContext } from "react";
import "./Snacks.css";
import MobileContent from "../../components/MobileContent";
import Navbar from "../../components/Bnavegacion";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { CartContext } from "../../components/CartContext";

import todorico from "../../img/snacks/todo_rico.png";
import detodito from "../../img/snacks/de_todito.png";

const snacks = [
    {
        id: 1,
        img: todorico,
        titulo: "Todo Rico BBQ",
        precio: "$4.000",
    },
    {
        id: 2,
        img: detodito,
        titulo: "De Todito BBQ",
        precio: "$4.000",
    },
];

export default function () {

const { addToCart } = useContext(CartContext);

    return (
        <div>
            <MobileContent />
            <Navbar />

            <div className="contenido">
                <Row xs={1} md={2} className="g-4 m-1">
                    {snacks.map((producto) => (
                        <Col key={producto.id}>
                            <Card>
                                <div className="cardd_snacks">
                                    <div className="image_snacks">
                                        <img
                                            src={producto.img}
                                            alt={producto.titulo}
                                        />
                                    </div>
                                    <div className="text_snacks">
                                        <span>{producto.titulo}</span>
                                        <p>{producto.precio}</p>
                                    </div>
                                    <button
                                        className="ordenar-btn"
                                        onClick={() => addToCart(producto)}
                                    >
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
