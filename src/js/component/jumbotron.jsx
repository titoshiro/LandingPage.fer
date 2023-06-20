import React from "react";

const Jumbotron = ({ saludo, texto, invitacion, boton }) => {
  return (
    <div>
      <div className="container jumbotron bg-light">
        <h1 className="display-4">{saludo}</h1>
        <p className="lead">{texto}</p>
        <p>{invitacion}</p>
        <p className="lead">
          <a className="btn btn-primary btn-lg" href="#" role="button">
            {boton}
          </a>
        </p>
      </div>
    </div>
  );
};

export default Jumbotron;
