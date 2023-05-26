import React from "react";

const Footer = (props) => {
  return (
    <div>
      <div className="card">
        <div className="card-body bg-black text-white">
          <blockquote className="blockquote mb-0 text-center ">
            <p>{props.footer}</p>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default Footer;
