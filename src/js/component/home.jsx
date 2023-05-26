import React from "react";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Cards from "./cards.jsx";
import Footer from "./footer.jsx";

//include images into your bundle

//create your first component
const Home = () => {
  return (
    <div>
      <Navbar
        empresa="TitoShiro"
        home="Home"
        about="About"
        services="Services"
        contact="Contact"
      />
      <br />
      <Jumbotron
        saludo="Hola Mundo"
        texto="Este es mi primer trabajo en react, esperando trasformarme en gran programador, me gustaria dedicarme el frontend y trabajar desde mi casa ubicada en el sur de chile "
        invitacion=" Te invito a apretar el boton azul y seguir mi historia"
        boton="Hola soy el boton azul"
      />
      <Cards
        imagen1="https://picsum.photos/200"
        titulo1="Primera Foto"
        texto1="Que opinas de esta foto? ¡esta genial!"
        boton1="Haz click aqui"
        imagen2="https://picsum.photos/300"
        titulo2="Segunda Foto"
        imagen3="https://picsum.photos/400"
        titulo3="Tercera Foto"
        imagen4="https://picsum.photos/500"
        titulo4="Cuarta Foto"
      />
      <br />
      <Footer footer="Copyrigth © My Website 2023" />
    </div>
  );
};

export default Home;
