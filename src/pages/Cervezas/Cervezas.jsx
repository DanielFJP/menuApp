import React, { useContext } from 'react';
import "./cervezas.css"
import MobileContent from '../../components/MobileContent';
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { CartContext } from '../../components/CartContext';

import aguila from '../../img/cervezas/cervezas-nacionales/aguila.png';
import aguila_light from "../../img/cervezas/cervezas-nacionales/aguila-light.png";
import poker from "../../img/cervezas/cervezas-nacionales/poker.png";
import costeña from "../../img/cervezas/cervezas-nacionales/costeña.png";
import club_dorada from "../../img/cervezas/cervezas-nacionales/dorada.png";
import club_roja from "../../img/cervezas/cervezas-nacionales/club_roja.png";
import club_negra from "../../img/cervezas/cervezas-nacionales/club_negra.png";
import club_trigo from "../../img/cervezas/cervezas-nacionales/club_trigo.png";
import club_grande from "../../img/cervezas/cervezas-nacionales/club_grande.png";

import bbc_cajica from "../../img/cervezas/cervezas-artesanales/bbc-cajica.png";
import bbc_monserrate from "../../img/cervezas/cervezas-artesanales/bbc-monserrate.png";
import bbc_chapinero from "../../img/cervezas/cervezas-artesanales/bbc-chapinero.png";
import bbc_bacata from "../../img/cervezas/cervezas-artesanales/bbc-bacata.png";
import bbc_rose from "../../img/cervezas/cervezas-artesanales/bbc-rose.png";
import bbc_lager from "../../img/cervezas/cervezas-artesanales/bbc-lager.png";
import bbc_macondo from "../../img/cervezas/cervezas-artesanales/bbc-macondo.png";
import rosada from "../../img/cervezas/cervezas-artesanales/3c_rosada.png";
import negra from "../../img/cervezas/cervezas-artesanales/3c_negra.png";
import mulata from "../../img/cervezas/cervezas-artesanales/3c_mulata.png";
import mona from "../../img/cervezas/cervezas-artesanales/3c_mona.png";
import mestiza from "../../img/cervezas/cervezas-artesanales/3c_mestiza.png";
import blanca from "../../img/cervezas/cervezas-artesanales/3c_blanca.png";

import corona from "../../img/cervezas/cervezas-importadas/corona.png";
import coronita from "../../img/cervezas/cervezas-importadas/coronita.png";
import stella from "../../img/cervezas/cervezas-importadas/stella.png";


const nacionales = [
    {
        id: 1,
        img: aguila,
        titulo: "Aguila Original",
        precio: "$4.500",
    },
    {
        id: 2,
        img: aguila_light,
        titulo: "Aguila Light",
        precio: "$5.000",
    },
    {
        id: 3,
        img: poker,
        titulo: "Poker",
        precio: "$4.500",
    },
    {
        id: 4,
        img: costeña,
        titulo: "Costeña",
        precio: "$4.000",
    },
    {
        id: 5,
        img: club_dorada,
        titulo: "Club Colombia Dorada",
        precio: "$5.000",
    },
    {
        id: 6,
        img: club_roja,
        titulo: "Club Colombia Roja",
        precio: "$5.000",
    },
    {
        id: 7,
        img: club_negra,
        titulo: "Club Colombia Negra",
        precio: "$5.000",
    },
    {
        id: 8,
        img: club_trigo,
        titulo: "Club Colombia Trigo",
        precio: "$6.000",
    },
    {
        id: 9,
        img: club_grande,
        titulo: "Club Colombion",
        precio: "$10.000",
    },
];


const artesanales = [
    {
        id: 1,
        img: bbc_cajica,
        titulo: "BBC Cajica",
        precio: "$10.000",
    },
    {
        id: 2,
        img: bbc_monserrate,
        titulo: "BBC Monserrate",
        precio: "$10.000",
    },
    {
        id: 3,
        img: bbc_chapinero,
        titulo: "BBC Chapinero",
        precio: "$10.000",
    },
    {
        id: 4,
        img: bbc_bacata,
        titulo: "BBC Bacata",
        precio: "$10.000",
    },
    {
        id: 5,
        img: bbc_rose,
        titulo: "BBC Rose",
        precio: "$10.000",
    },
    {
        id: 6,
        img: bbc_lager,
        titulo: "BBC Lager",
        precio: "$10.000",
    },
    {
        id: 7,
        img: bbc_macondo,
        titulo: "BBC Macondo",
        precio: "$10.000",
    },
    {
        id: 8,
        img: rosada,
        titulo: "3 Cordilleras Rosada",
        precio: "$10.000",
    },
    {
        id: 9,
        img: negra,
        titulo: "3 Cordilleras Negra",
        precio: "$10.000",
    },
    {
        id: 10,
        img: mulata,
        titulo: "3 Cordilleras Mulata",
        precio: "$10.000",
    },
    {
        id: 11,
        img: mona,
        titulo: "3 Cordilleras Mona",
        precio: "$10.000",
    },
    {
        id: 12,
        img: mestiza,
        titulo: "3 Cordilleras Mestiza",
        precio: "$10.000",
    },
    {
        id: 13,
        img: blanca,
        titulo: "3 Cordilleras Blanca",
        precio: "$10.000",
    },
];

const importadas = [
    {
        id: 1,
        img: corona,
        titulo: "Corona Extra",
        precio: "$10.000",
    },
    {
        id: 2,
        img: coronita,
        titulo: "Coronita",
        precio: "$6.000",
    },
    {
        id: 3,
        img: stella,
        titulo: "Stella Artois",
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
                  defaultActiveKey="nacionales"
                  transition={true}
                  id="noanim-tab-example"
                  className="mb-1 d-flex justify-content-center bg-dark "
              >
                  <Tab eventKey="nacionales" title="Nacionales">
                      <Row xs={2} md={2} className="g-4 m-1">
                          {nacionales.map((producto) => (
                              <Col key={producto.id}>
                                  <Card>
                                      <div className="cardd">
                                          <div className="image">
                                              <img
                                                  src={producto.img}
                                                  alt={producto.titulo}
                                              />
                                          </div>
                                          <div className="text">
                                              <span>{producto.titulo}</span>
                                              <p>{producto.precio}</p>
                                          </div>
                                          <button
                                              className="ordenar-btn"
                                              onClick={() =>addToCart(producto)}
                                          >
                                              Ordenar
                                          </button>
                                      </div>
                                  </Card>
                              </Col>
                          ))}
                      </Row>
                  </Tab>

                  <Tab eventKey="artesanales" title="Artesanales">
                      <Row xs={2} md={2} className="g-4 m-1">
                          {artesanales.map((producto) => (
                              <Col key={producto.id}>
                                  <Card>
                                      <div class="cardd">
                                          <div className="image_art">
                                              <img
                                                  src={producto.img}
                                                  alt={producto.titulo}
                                              />
                                          </div>
                                          <div className="text">
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
                  <Tab eventKey="importadas" title="Importadas">
                      <Row xs={2} md={2} className="g-4 m-1">
                          {importadas.map((producto) => (
                              <Col key={producto.id}>
                                  <Card>
                                      <div className="cardd">
                                          <div className="image">
                                              <img
                                                  src={producto.img}
                                                  alt={producto.titulo}
                                              />
                                          </div>
                                          <div className="text">
                                              <span>{producto.titulo}</span>
                                              <p>{producto.precio}</p>
                                          </div>
                                          <button className="ordenar-btn" onClick={() => addToCart(producto)}>
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
