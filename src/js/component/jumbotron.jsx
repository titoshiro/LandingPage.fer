import React from "react";

const Jumbotron = (props) => {
  return (
    <div>
      <div className="container jumbotron bg-light">
        <h1 className="display-4">{props.saludo}</h1>
        <p className="lead">{props.texto}</p>
        <p>{props.invitacion}</p>
        <p className="lead">
          <a className="btn btn-primary btn-lg" href="#" role="button">
            {props.boton}
          </a>
        </p>
      </div>
    </div>
  );
};

export default Jumbotron;
