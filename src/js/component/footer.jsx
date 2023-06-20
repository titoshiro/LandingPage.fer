import React from "react";

const Footer = ({ footer }) => {
  return (
    <div>
      <div className="card">
        <div className="card-body bg-black text-white">
          <blockquote className="blockquote mb-0 text-center ">
            <p>{footer}</p>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default Footer;
