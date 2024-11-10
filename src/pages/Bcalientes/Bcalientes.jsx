import React, { useContext } from "react";
import "./Bcalientes.css";
import MobileContent from "../../components/MobileContent";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { CartContext } from "../../components/CartContext";

import tinto from "../../img/bebidas-calientes/tinto.png";
import latte_6onz from "../../img/bebidas-calientes/latte_6onz.png";
import latte_9onz from "../../img/bebidas-calientes/latte_9onz.png";
import capuchino from "../../img/bebidas-calientes/capuchino.png";

import aromatica_6onz from "../../img/bebidas-calientes/aromatica_6onz.png";
import aromatica_9onz from "../../img/bebidas-calientes/aromatica_9onz.png";

import capuchino_con_licor from "../../img/bebidas-calientes/capuchino_con_licor.png";
import vino_caliente from "../../img/bebidas-calientes/vino_caliente.png";

const cafes = [
    {
        id: 1,
        img: tinto,
        titulo: "Americano 6onz",
        precio: "$2.000",
    },
    {
        id: 2,
        img: latte_6onz,
        titulo: "Latte 6onz",
        precio: "3.500",
    },
    {
        id: 3,
        img: latte_9onz,
        titulo: "Latte 9onz",
        precio: "4.500",
    },
    {
        id: 4,
        img: capuchino,
        titulo: "Capuchino",
        precio: "$6.000",
    },
];

const aromaticas = [
    {
        id: 1,
        img: aromatica_6onz,
        titulo: "Aromatica 6onz",
        precio: "$2.000",
    },
    {
        id: 2,
        img: aromatica_9onz,
        titulo: "Aromatica 9onz",
        precio: "$3.500",
    },
];

const con_alcohol = [
    {
        id: 1,
        img: capuchino_con_licor,
        titulo: "Capuchino Con Licor",
        precio: "$8.000",
    },
    {
        id: 2,
        img: vino_caliente,
        titulo: "Vino Caliente",
        precio: "$10.000",
    },
];

export default function () {
    const { addToCart } = useContext(CartContext);

    return (
        <div>
            <MobileContent />

            <div className="contenido">
                <Tabs
                    defaultActiveKey="cafes"
                    transition={true}
                    id="noanim-tab-example"
                    className="mb-1 d-flex justify-content-center bg-dark "
                >
                    <Tab eventKey="cafes" title="Cafes">
                        <Row xs={2} md={2} className="g-4 m-1">
                            {cafes.map((producto) => (
                                <Col key={producto.id}>
                                    <Card>
                                        <div className="cardd_cafes">
                                            <div className="image_cafes">
                                                <img
                                                    src={producto.img}
                                                    alt={producto.titulo}
                                                />
                                            </div>
                                            <div className="text_cafes">
                                                <span>{producto.titulo}</span>
                                                <p>{producto.precio}</p>
                                            </div>
                                            <button
                                                className="ordenar-btn"
                                                onClick={() =>
                                                    addToCart(producto)
                                                }
                                            >
                                                Ordenar
                                            </button>
                                        </div>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Tab>
                    <Tab eventKey="aromaticas" title="Aromaticas">
                        <Row xs={1} md={2} className="g-4 m-1">
                            {aromaticas.map((producto) => (
                                <Col key={producto.id}>
                                    <Card>
                                        <div class="cardd_arm">
                                            <div className="image_arm">
                                                <img
                                                    src={producto.img}
                                                    alt={producto.titulo}
                                                />
                                            </div>
                                            <div className="text_arm">
                                                <span>{producto.titulo}</span>
                                                <p>{producto.precio}</p>
                                            </div>
                                            <button
                                                className="ordenar-btn"
                                                onClick={() =>
                                                    addToCart(producto)
                                                }
                                            >
                                                Ordenar
                                            </button>
                                        </div>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Tab>
                    <Tab eventKey="con_alcohol" title="Con Alcohol">
                        <Row xs={1} md={2} className="g-4 m-1">
                            {con_alcohol.map((producto) => (
                                <Col key={producto.id}>
                                    <Card>
                                        <div class="cardd_alh">
                                            <div className="image_alh">
                                                <img
                                                    src={producto.img}
                                                    alt={producto.titulo}
                                                />
                                            </div>
                                            <div className="text_alh">
                                                <span>{producto.titulo}</span>
                                                <p>{producto.precio}</p>
                                            </div>
                                            <button
                                                className="ordenar-btn"
                                                onClick={() =>
                                                    addToCart(producto)
                                                }
                                            >
                                                Ordenar
                                            </button>
                                        </div>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Tab>
                </Tabs>
            </div>
        </div>
    );
}
