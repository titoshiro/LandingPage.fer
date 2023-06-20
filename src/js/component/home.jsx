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
        empresa="TitoShiro & Fernanda"
        home="Home"
        about="About"
        services="Services"
        contact="Contact"
      />
      <Jumbotron
        saludo="Hola Mundo"
        texto="Este es nuestro primer trabajo en react, esperando trasformarnos en grandes programadores "
        invitacion=" Te invito a apretar el boton azul y seguir nuestra historia"
        boton="Hola soy el boton azul"
      />
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-3">
            <Cards
              imagen="https://picsum.photos/200"
              titulo="Primera Foto"
              texto="Que opinas de esta foto? ¡esta genial!"
              boton="Haz click aqui"
            />
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <Cards
              imagen="https://picsum.photos/300"
              titulo="Segunda Foto"
              texto="Que opinas de esta foto? ¡esta genial!"
              boton="Haz click aqui"
            />
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <Cards
              imagen="https://picsum.photos/400"
              titulo="Tercera Foto"
              texto="Que opinas de esta foto? ¡esta genial!"
              boton="Haz click aqui"
            />
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <Cards
              imagen="https://picsum.photos/500"
              titulo="Cuarta Foto"
              texto="Que opinas de esta foto? ¡esta genial!"
              boton="Haz click aqui"
            />
          </div>
        </div>
      </div>

      <br />
      <Footer footer="Copyrigth © My Website 2023" />
    </div>
  );
};

export default Home;
