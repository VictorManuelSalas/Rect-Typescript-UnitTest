import React from "react";
import ReactDOM from "react-dom/client";
// import { HelloWorldApp } from "./HelloWorldApp";
import { FirstApp } from "./components/FirstApp";


//Aqui se agregan las referencias globales
import './styles.css' //Como quiero tener estilos css globales solo lo importo





//Renderisar el app
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <FirstApp ciudad='Gomez Palacio' fecha={new Date()} años={25} />     {/*  Mismo nombre de la funcion.
        Props: 
            1.-Para mandar props al componente hijo se usa identificador=valor.
            2.- Mandar numeros se usan {123}
         */}
    </React.StrictMode>
)