import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "./components/CartContext";
import Inicio from "./pages/inicio/inicio";
import Cervezas from "./pages/Cervezas/Cervezas";
import Bcalientes from "./pages/Bcalientes/Bcalientes";
import BsinAlcohol from "./pages/BsinAlcohol/BsinAlcohol";
import Snacks from "./pages/Snacks/Snacks";
import Shots from "./pages/Shots/Shots";

import Navbar from "./components/Bnavegacion";
import MobileContent from "./components/MobileContent";
  
  
export function App() {
    return (
        <CartProvider>
            <BrowserRouter>
                <Navbar />

                <Routes>
                    <Route path="/mobile_content" element={<MobileContent />} />

                    <Route index path="/" element={<Inicio />} />
                    <Route path="/cervezas" element={<Cervezas />} />
                    <Route path="/bebidas_calientes" element={<Bcalientes />} />
                    <Route path="/bebidas_sin_alcohol" element={<BsinAlcohol />}/>
                    <Route path="/snacks" element={<Snacks />} />
                    <Route path="/shots" element={<Shots />} />
                </Routes>
            </BrowserRouter>
        </CartProvider>
    );
}