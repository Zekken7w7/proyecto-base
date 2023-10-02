import React from "react";
//import image1 from "../assets/1296309 (4).png";
import PropTypes from 'prop-types'

export default function Card({id, title, image, instructor}){
  return (
    <div className="card text-center bg-dark">
      <div className="card-body text-light">
        <img src={image} alt="" className='card-img-top'></img>
        <h4 className="card-title"> {title} </h4>
        <p className="card-text text-primary">
        Instructor: {instructor}</p>
                <a href="#!" className="btn btn-outline-secundary rounded-3"> Ir al sitio web </a>
      </div>
    </div>
  );
}
