import React, { useContext } from "react";
import "./BsinAlcohol.css";
import MobileContent from "../../components/MobileContent";
import Navbar from "../../components/Bnavegacion";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { CartContext } from "../../components/CartContext";

import Zalva from "../../img/bebidas-sin-alcohol/agua-zalva.png";
import colombiana from "../../img/bebidas-sin-alcohol/colombiana.png";
import hit_tropical from "../../img/bebidas-sin-alcohol/Hit-Frutas-tropicales.png";
import hit_lulo from "../../img/bebidas-sin-alcohol/Hit-Lulo.png";
import hit_mango from "../../img/bebidas-sin-alcohol/Hit-Mango.png";
import hit_mora from "../../img/bebidas-sin-alcohol/Hit-Mora.png";
import hit_naranja from "../../img/bebidas-sin-alcohol/Hit-Naranja-Piña.png";

const SinAlcohol = [
    {
        id: 1,
        img: Zalva,
        titulo: "Agua Zalva",
        precio: "$3.000",
    },
    {
        id: 2,
        img: colombiana,
        titulo: "Colombiana",
        precio: "$3.500",
    },
    {
        id: 3,
        img: hit_tropical,
        titulo: "Jugo Hit Tropical",
        precio: "$3.500",
    },
    {
        id: 4,
        img: hit_lulo,
        titulo: "Jugo Hit Lulo",
        precio: "$3.500",
    },
    {
        id: 5,
        img: hit_mango,
        titulo: "Jugo Hit Mango",
        precio: "$3.500",
    },
    {
        id: 6,
        img: hit_mora,
        titulo: "Jugo Hit Mora",
        precio: "$3.500",
    },
    {
        id: 7,
        img: hit_naranja,
        titulo: "Jugo Hit Naranja Piña",
        precio: "$3.500",
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
                    {SinAlcohol.map((producto) => (
                        <Col key={producto.id}>
                            <Card>
                                <div class="cardd">
                                    <div className="image-BsinAlcohol">
                                        <img
                                            src={producto.img}
                                            alt={producto.titulo}
                                        />
                                    </div>
                                    <div className="text-BsinAlcohol">
                                        <span>{producto.titulo}</span>
                                        <p>{producto.precio}</p>
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
