import React from 'react'
import './inicio.css';
import logo from '../../img/logoonce.png';
import Carousel from 'react-bootstrap/Carousel';
import cervezas from '../../img/cervezas/jarra-de-cerveza.png';
import Bcalientes from '../../img/bebidas-calientes/bebidas-calientes.png';
import BsinAlcohol from '../../img/bebidas-sin-alcohol/sin-alcohol.png';
import snacks from '../../img/snacks/snacks.png';
import shots from '../../img/shots/shots.png';
import { Link } from 'react-router-dom';
import MobileContent from '../../components/MobileContent';


function Inicio() {
    return (
        <div>
            <MobileContent />
            <div className="container">
                <h1>
                    Bienvenido-a <br /> te estábamos esperando &#x1F37B;
                </h1>
                {/*<div className="productos">
                    <h1>Nuestros Productos</h1>

                    <Carousel>
                        <Carousel.Item>
                            <Link to="/cervezas">
                                <img
                                    className="d-block"
                                    src={cervezas}
                                    alt="nacionales"
                                />
                                <Carousel.Caption>
                                    <h3>Cervezas</h3>
                                </Carousel.Caption>
                            </Link>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Link to="/bebidas_calientes">
                                <img
                                    className="d-block"
                                    src={Bcalientes}
                                    alt="artesanales"
                                />
                                <Carousel.Caption>
                                    <h3>Bebidas Calientes</h3>
                                </Carousel.Caption>
                            </Link>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Link to="/bebidas_sin_alcohol">
                                <img
                                    className="d-block"
                                    src={BsinAlcohol}
                                    alt="importadas"
                                />
                                <Carousel.Caption>
                                    <h3>Bebidas Sin Alcohol</h3>
                                </Carousel.Caption>
                            </Link>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Link to="/snacks">
                                <img
                                    className="d-block"
                                    src={snacks}
                                    alt="importadas"
                                />
                                <Carousel.Caption>
                                    <h3>Snacks</h3>
                                </Carousel.Caption>
                            </Link>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Link to="/shots">
                                <img
                                    className="d-block"
                                    src={shots}
                                    alt="importadas"
                                />
                                <Carousel.Caption>
                                    <h3>Shots</h3>
                                </Carousel.Caption>
                            </Link>
                        </Carousel.Item>
                    </Carousel>
                </div>*/}

                <Link to="/cervezas" className="boton_producto">
                    <div class="svg-wrapper-1">
                        <div class="svg-wrapper">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="25"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    d="M9 3a2 2 0 0 1 1.972 2.335l1.973.33a4 4 0 0 0-.005-1.361A2 2 0 0 1 15.733 7H5a1 1 0 1 1 .539-1.843a1 1 0 0 0 1.513-.614A2 2 0 0 1 9 3m1.516-1.703A4 4 0 0 0 5.51 3.043A3 3 0 0 0 3 8.236V20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2h2a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2h-2v-.354a4 4 0 0 0-4.896-6.169a4 4 0 0 0-1.588-1.18M17 11h2v7h-2zm-2-2v11H5V9zm-8 2v7h2v-7zm6 0v7h-2v-7z"
                                />
                            </svg>
                        </div>
                    </div>
                    <span>Cervezas</span>
                </Link>

                <Link to="/bebidas_calientes" className="boton_producto">
                    <div class="svg-wrapper-1">
                        <div class="svg-wrapper">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="25"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M4 20h6.943m0 0h.114m-.114 0h.114m-.114 0A7 7 0 0 1 4 13V8.923c0-.51.413-.923.923-.923h12.154c.51 0 .923.413.923.923V9m-6.943 11H18m-6.943 0A7 7 0 0 0 18 13m0-4h1.5a2.5 2.5 0 0 1 0 5H18v-1m0-4v4M15 3l-1 2m-2-2l-1 2M9 3L8 5"
                                />
                            </svg>
                        </div>
                    </div>
                    <span>Bebidas Calientes</span>
                </Link>

                <Link to="/bebidas_sin_alcohol" className="boton_producto">
                    <div class="svg-wrapper-1">
                        <div class="svg-wrapper">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                height="30"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    d="M10 2v2h.91C10.65 5.79 9 7.5 8 9v4.77a3.007 3.007 0 0 1 0 4.46V20a2 2 0 0 0 2 2h4c1.11 0 2-.89 2-2v-1.77a3.007 3.007 0 0 1 0-4.46V9c-1-1.5-2.65-3.21-2.91-5H14V2m-2 4.5c.24.5 1.54 2 1.9 2.41L14 9v4c-.65.87-1 1.92-1 3s.35 2.13 1 3v1h-4v-1c.65-.87 1-1.92 1-3s-.35-2.13-1-3V9l.1-.09C10.46 8.5 11.76 7 12 6.5"
                                />
                            </svg>
                        </div>
                    </div>
                    <span>Bebidas Sin Alcohol</span>
                </Link>

                <Link to="/snacks" className="boton_producto">
                    <div class="svg-wrapper-1">
                        <div class="svg-wrapper">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                height="30"
                                viewBox="0 0 512 512"
                            >
                                <path
                                    fill="currentColor"
                                    d="M132.684 31.388a1.4 1.4 0 0 0-.29.004c-.396.048-.768.25-1.398.609c-1.26.719-3.215 2.597-5.039 5.484c-3.648 5.776-6.593 15.148-7.516 22.34c-2.004 15.623 3.42 23.692 13.293 31.436c5 3.92 11.236 7.328 17.914 10.515c-3.23-13.668-3.189-27.344-3.732-38.859c-.419-8.882-1.232-16.509-3.107-21.623c-1.853-5.052-3.884-7.627-8.987-9.62c-.472-.156-.833-.262-1.138-.286m111.212 11.478c-27.446.122-54.797 1.187-81.492 2.78c.891 5.354 1.23 10.856 1.492 16.423c.048 1.01.092 2.025.137 3.037c21.693 20.288 34.01 21.811 44.826 20.485c5.516-.677 10.93-2.497 17.13-3.977a73 73 0 0 1 3.081-.658c8.481-8.258 19.868-14.662 33.342-20.033A61.8 61.8 0 0 1 287.7 56.56c8.175.303 15.944 2.17 22.854 5.03c6.499 2.69 12.318 6.169 17.218 10.23c2.24-.62 4.518-.928 6.819-.967c7.174-.12 14.565 2.29 21.66 5.385c11.352 4.952 22.62 12.632 31.791 20.908c2.124 1.917 4.14 3.82 6.033 5.737l16.018-3.11l2.63-1.925c13.21-9.668 22.782-20.853 30.01-31.409c-56.662-17.009-121.396-23.16-186.43-23.564q-6.204-.038-12.406-.01zm-142.01 7.254a4102 4102 0 0 0-36.077 3.254c1.134 11.198 6.268 21.673 18.056 32.58l3.17 2.934l22.328 4.808c-6.756-9.505-10.64-21.648-8.777-36.162c.309-2.406.74-4.894 1.3-7.414m183.048 24.371c-5.166.056-10.503 1.019-15.856 3.153C255.233 83.162 245 89.696 239.15 96.478c-5.85 6.78-7.914 13.268-6.27 22.378q.141.764.302 1.51l33.588 7.235l69.66-13.526c-4.783-5.828-9.006-12.019-12.248-18.79c-2.489-5.199-10.313-12.84-20.512-17.061c-5.1-2.111-10.69-3.475-16.533-3.702a44 44 0 0 0-2.203-.03zm57.095 15.85c3.411 5.378 7.23 10.978 11.621 16.22a151 151 0 0 0 3.252 3.54l15.147-2.94c-7.09-5.78-15.437-11.126-22.996-14.424a45.4 45.4 0 0 0-7.024-2.396m-174.496.594c.94 5.71 2.199 11.12 3.799 16.109l43.184 9.303a43.9 43.9 0 0 1 1.423-13.678a71 71 0 0 1-4.888.787c-11.8 1.447-26.322-.936-43.518-12.521M91.93 108.356l-8.383 76.563l94.193 2.305c21.335-19.254 48.606-30.866 78.479-30.866c31.857 0 60.758 13.206 82.652 34.805l77.983 1.908l-5.041-75.295l-145.231 28.198zm164.289 66.002c-58.224 0-106.217 52.74-106.217 119.13s47.993 119.128 106.217 119.128s106.217-52.739 106.217-119.129s-47.994-119.129-106.217-119.129M75.785 202.733l-6.281 62.846C63.95 321.138 77.74 377.93 99.787 435.145l1.66 4.31l-2.531 3.86c-7.597 11.588-19.783 21.862-33.562 31.42c14.767 1.264 29.76 2.284 44.917 3.102l22.924-29.006l14.121 11.16l-14.927 18.89c14.169.58 28.459.997 42.832 1.278l1.113-25.775l17.984.777l-1.093 25.283c16.038.191 32.158.21 48.296.127v-25.629h18v25.5c16.873-.173 33.736-.457 50.543-.818l-3.898-24.117l17.77-2.873l4.296 26.58c16.438-.401 32.687-.872 48.893-1.346l-13.9-23.219l15.445-9.246l19.074 31.867c16.498-.494 32.835-.987 48.902-1.44c-12.73-11.767-25.39-24.23-32.433-39.46l-1.111-2.402l.367-2.623s12.397-89.64 12.533-132.92c.073-23.34-2.226-55.719-5.145-87.25l-66.455-1.625c16.34 23.275 26.034 52.45 26.034 83.937c0 75.138-55.176 137.13-124.217 137.13c-69.042 0-124.217-61.992-124.217-137.13c0-33.654 11.075-64.665 29.502-88.656zm237.53 41.409c6.184-.143 12.236 2.243 17.081 5.77c6.891 5.014 12.332 12.414 15.83 21.1c6.998 17.373 5.063 41.493-15.263 57.376c-17.671 13.808-38.32 16.338-57.145 10.445a80 80 0 0 1-6.324-2.295c-12.764 3.93-27.601 9.065-42.97 9.707c-16.562.692-34.526-5.338-46.34-23.398c-5.325-8.14-10.014-18.55-11.545-29.149c-.766-5.3-.78-10.759 1.148-16.115c1.929-5.356 6.402-10.43 12.367-12.79l.145-.056l.146-.052a32.5 32.5 0 0 1 10.29-1.885c6.457-.127 12.625 1.658 17.83 4.586c7.93 4.46 14.327 11 20.703 17.789c.692.737 1.384 1.481 2.076 2.222c29.671 1.337 40.027-5.507 47.39-13.54c3.755-4.098 6.69-8.995 10.442-14.147s8.697-10.777 16.314-13.93a21.6 21.6 0 0 1 7.824-1.638zm1.013 17.925a4.5 4.5 0 0 0-1.955.346c-3.299 1.365-5.61 3.723-8.648 7.895c-3.039 4.171-6.427 9.934-11.721 15.71c-8.033 8.765-20.623 16.386-41.225 18.745c7.154 6.034 14.434 10.94 21.575 14.23l13.15 4.242c11.839 2.249 22.923-.082 34.375-9.03c14.157-11.063 14.339-24.833 9.652-36.468c-2.343-5.817-6.195-10.7-9.726-13.271c-2.318-1.687-4.071-2.343-5.477-2.399m-122.54 18.5c-1.556.022-3.21.362-5.126 1.028c-1.288.523-1.468.776-1.94 2.086c-.49 1.365-.757 4.062-.269 7.443c.977 6.761 4.824 15.8 8.793 21.867c8.623 13.182 17.991 15.796 30.527 15.272c6.35-.266 13.304-1.726 20.454-3.641c-11.335-8.295-20.188-18.721-28.08-27.125c-6.088-6.482-11.659-11.753-16.407-14.424c-2.374-1.335-4.366-2.162-6.426-2.422a11 11 0 0 0-1.527-.084z"
                                />
                            </svg>
                        </div>
                    </div>
                    <span>Snacks</span>
                </Link>

                <Link to="/shots" className="boton_producto">
                    <div class="svg-wrapper-1">
                        <div class="svg-wrapper">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="25"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    d="m4 2l2 20h11l2-20zm2.2 2h10.6l-.3 3.23c-3.32 1.27-4.65.44-5.12.08c-.25-.19-.61-.62-1.27-.92c-.66-.31-1.56-.39-2.61-.07c-.41.11-.73.29-1 .47zm2.66 4.11c.19 0 .3.04.41.09c.23.1.44.35.9.7c.86.66 2.86 1.46 6.09.51L15.2 20H7.8L6.71 9.06c.05-.06.2-.17.46-.35c.33-.21.74-.43.83-.46h.03c.38-.11.64-.15.83-.14"
                                />
                            </svg>
                        </div>
                    </div>
                    <span>Shots</span>
                </Link>
            </div>
        </div>
    );
}

export default Inicio;