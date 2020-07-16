import React, { useRef, useState } from "react";

const Acordeon = ({ descripcion }) => {
  const description = useRef(null);
  // const colapsarDescripcion = () => {
  //   description.current.classList.toggle("show");
  // };

  const [colapsado, guardarColapsado] = useState(false);

  const handleColapso = () => {
    description.current.classList.toggle("show");
    if (!colapsado) {
      guardarColapsado(true);
    } else {
      guardarColapsado(false);
    }
  };
  return (
    <div className="acordion" onClick={handleColapso}>
      <span
        className="more d-block text-center"
        data-target="#collapseOne"
        aria-expanded="true"
        aria-controls="collapseOne"
        // onClick={colapsarDescripcion}
      >
        {colapsado ? (
          <i className="fas fa-caret-up fa-lg mr-2"></i>
        ) : (
          <i className="fas fa-caret-down fa-lg mr-2"></i>
        )}
        Ver más acerca de esta clase
      </span>
      <div
        ref={description}
        id="collapseOne"
        className="collapse  "
        aria-labelledby="headingOne"
        data-parent="#accordion"
      >
        <div className="card-body animate__animated animate__pulse">
          {descripcion}
        </div>
      </div>
    </div>
  );
};

export default Acordeon;
