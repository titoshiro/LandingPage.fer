import React from "react";

const Cards = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6 col-lg-3">
          <div className="card" style={{}}>
            <img
              className="card-img-top"
              src={props.imagen1}
              alt="Card image cap"
            ></img>
            <div className="card-body">
              <h5 className="card-title">{props.titulo1}</h5>
              <p className="card-text">{props.texto1}</p>
              <a href="#" className="btn btn-primary">
                {props.boton1}
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <div className="card" style={{}}>
            <img
              className="card-img-top"
              src={props.imagen2}
              alt="Card image cap"
            ></img>
            <div className="card-body">
              <h5 className="card-title">{props.titulo2}</h5>
              <p className="card-text">{props.texto1}</p>
              <a href="#" className="btn btn-primary">
                {props.boton1}
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <div className="card" style={{}}>
            <img
              className="card-img-top"
              src={props.imagen3}
              alt="Card image cap"
            ></img>
            <div className="card-body">
              <h5 className="card-title">{props.titulo3}</h5>
              <p className="card-text">{props.texto1}</p>
              <a href="#" className="btn btn-primary">
                {props.boton1}
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3 ">
          <div className="card" style={{}}>
            <img
              className="card-img-top"
              src={props.imagen4}
              alt="Card image cap"
            ></img>
            <div className="card-body">
              <h5 className="card-title">{props.titulo4}</h5>
              <p className="card-text">{props.texto1}</p>
              <a href="#" className="btn btn-primary">
                {props.boton1}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
