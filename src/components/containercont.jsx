import { useState, useEffect } from "react";
import axios from "axios";

export default function ContainerCont(props) {
  return (
    <div className="box-contact-container">
      <p>Nombre: {props.nombre}</p>
      <p>Correo: {props.correo}</p>
      <p>Descripcion: {props.desc}</p>
    </div>
  );
}
