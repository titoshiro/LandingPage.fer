import React from "react";

const Cards = ({ imagen, titulo, texto, boton }) => {
  return (
    <div className="card">
      <img className="card-img-top" src={imagen} alt="Card image cap"></img>
      <div className="card-body">
        <h5 className="card-title text-center">{titulo}</h5>
        <p className="card-text text-center">{texto}</p>
        <a href="#" className="btn btn-primary d-grid gap-2 col-6 mx-auto ">
          {boton}
        </a>
      </div>
    </div>
  );
};

export default Cards;
