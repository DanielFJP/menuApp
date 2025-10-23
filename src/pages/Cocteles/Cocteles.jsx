import React, { useContext } from "react";
import "./Cocteles.css";
import MobileContent from "../../components/MobileContent";
import Navbar from "../../components/Bnavegacion";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { CartContext } from "../../components/CartContext";

import coctel1 from "../../img/cocteles/coctel1.png";
import coctel2 from "../../img/cocteles/coctel2.png";
import coctel3 from "../../img/cocteles/coctel3.png";
import coctel4 from "../../img/cocteles/coctel4.png";
import coctel5 from "../../img/cocteles/coctel5.png";
import coctel6 from "../../img/cocteles/coctel6.png";


const Cocteles = [
    {
        id: 1,
        img: coctel1,
        titulo: "Jagerita",
        descripcion:
            "jagermeister, Tequila, Sumo de limón y triple sec.",
        precio: "$21.000",
        disponible: true,
    },
    {
        id: 2,
        img: coctel2,
        titulo: "Martini",
        descripcion: "Vodka y Vermut",
        precio: "$17.000",
        disponible: true,
    },
    {
        id: 3,
        img: coctel3,
        titulo: "JagerBoom",
        descripcion: "Reb Bull, Jagermeister, Opcional Jugo de Limon.",
        precio: "$20.000",
        disponible: true,
    },
    {
        id: 4,
        img: coctel4,
        titulo: "Apple Sour",
        descripcion: "Jack Green Apple, Triple Sec, Licor de Maracuya, Soda, Manzana Verde.",
        precio: "$23.000",
        disponible: true,
    },
    {
        id: 5,
        img: coctel5,
        titulo: "Honey Sour",
        descripcion: "Jack Honey, Triple Sec, Soda, Granadina y Sumo de Limon.",
        precio: "$23.000",
        disponible: true,
    },
    {
        id: 6,
        img: coctel6,
        titulo: "Maracuya Sunset",
        descripcion: "Ron Blanco, Triple Sec, Licor de Maracuyá y Granadina",
        precio: "$19.000",
        disponible: true,
    },
];

export default function () {
    const { addToCart } = useContext(CartContext);

    return (
        <div>
            <MobileContent />
            <Navbar />

            <div className="contenido">
                <Row xs={2} md={2} className="g-4 m-1">
                    {Cocteles.map((producto) => (
                        <Col key={producto.id}>
                            <Card>
                                <div className="cardd">
                                    {!producto.disponible && (
                                        <div className="no-disponible">
                                            No Disponible
                                        </div>
                                    )}
                                    <div className="image-Cocteles">
                                        <img
                                            src={producto.img}
                                            alt={producto.titulo}
                                            style={{
                                                filter: producto.disponible
                                                    ? "none"
                                                    : "grayscale(100%)",
                                            }}
                                        />
                                    </div>
                                    <div className="text-Cocteles">
                                        <span>{producto.titulo}</span>
                                        <p>{producto.descripcion}</p>
                                        <p className="precio_coctel">{producto.precio}</p>
                                    </div>
                                    {/*<button
                                        className="ordenar-btn"
                                        onClick={() => addToCart(producto)}
                                    >
                                        Ordenar
                                    </button>*/}
                                </div>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
}
