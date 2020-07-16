import React from "react";
import styled from "@emotion/styled";

const ModalBody = styled.div`
  li {
    margin: 2rem;
  }
`;

const Terminos = () => {
  return (
    <div
      className="modal fade"
      id="tyc-modal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalScrollableTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-scrollable" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalScrollableTitle">
              <b> Términos y Condiciones de uso</b>
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <ModalBody className="modal-body">
            <p>
              Esta página web es propiedad y está operada por Rodrigo Nahuel
              Berbel (DNI: 40960023). Estos Términos establecen los términos y
              condiciones bajo los cuales tu puedes usar nuestra página web y
              servicios ofrecidos por nosotros. Esta página web ofrece a los
              visitantes poder unirse a grupos de WhatsApp&#169; creados para
              compartir información útil entre estudiantes. Al acceder o usar la
              página web de nuestro servicio, usted aprueba que haya leído,
              entendido y aceptado estar sujeto a estos Términos:
            </p>
            <ul>
              <li>
                Para usar nuestra página web y / o recibir nuestros servicios,
                <b>
                  {" "}
                  debes ser profesor y/o estudiante registrado en la Universidad Nacional del
                  Comahue,
                </b>{" "}
                poseer la autoridad legal, el derecho y la libertad para
                participar en estos Términos como un acuerdo vinculante. No
                tienes permitido utilizar esta página web y / o recibir
                servicios si hacerlo está prohibido en tu país o en virtud de
                cualquier ley o regulación aplicable a tu caso.
              </li>
              <li>
                <b>Retención del derecho a cambiar de oferta:</b> Podemos, sin
                aviso previo, cambiar los servicios; dejar de proporcionar los
                servicios o cualquier característica de los éstos que ofrecemos.
                Podemos suspender de manera permanente o temporal el acceso a
                los servicios sin previo aviso ni responsabilidad por cualquier
                motivo, o sin ningún motivo.
              </li>
              <li>
                <b>Propiedad Intelectual y Derechos de Autor</b> El Servicio y
                todos los materiales incluidos o transferidos, incluyendo, sin
                limitación, software, imágenes, texto, gráficos, logotipos,
                patentes, marcas registradas, marcas de servicio, derechos de
                autor, fotografías, audio, videos, música y todos los Derechos
                de Propiedad Intelectual relacionados con ellos, son la
                propiedad exclusiva de [Nombre del propietario dela página web].
                Salvo que se indique explícitamente en este documento, no se
                considerará que nada en estos Términos crea una licencia en o
                bajo ninguno de dichos Derechos de Propiedad Intelectual, y tu
                aceptas no vender, licenciar, alquilar, modificar, distribuir,
                copiar, reproducir, transmitir, exhibir públicamente, realizar
                públicamente, publicar, adaptar, editar o crear trabajos
                derivados de los mismos.
              </li>
              <li>
                <b>Limitación de responsabilidad</b>: Usted acuerda indemnizar y
                eximir de responsabilidad a Rodrigo Nahuel Berbel (DNI:
                40960023) de cualquier demanda, pérdida, responsabilidad,
                reclamación o gasto (incluidos los honorarios de abogados) que
                terceros realicen en tu contra como consecuencia de, o derivado
                de, o en relación con tu uso de la página web o cualquiera de
                los servicios ofrecidos en la página web
                <ul>
                  <li>
                    En la máxima medida permitida por la ley aplicable, en
                    ningún caso Rodrigo Nahuel Berbel (DNI: 40960023) será
                    responsable por daños indirectos, punitivos, incidentales,
                    especiales, consecuentes o ejemplares, incluidos, entre
                    otros, daños por pérdida de beneficios, buena voluntad, uso,
                    datos. u otras pérdidas intangibles, que surjan de o estén
                    relacionadas con el uso o la imposibilidad de utilizar el
                    servicio. En la máxima medida permitida por la ley
                    aplicable, [el propietario la página web] no asume
                    responsabilidad alguna por (i) errores, errores o
                    inexactitudes de contenido; (ii) lesiones personales o daños
                    a la propiedad, de cualquier naturaleza que sean, como
                    resultado de tu acceso o uso de nuestro servicio; y (iii)
                    cualquier acceso no autorizado o uso de nuestros servidores
                    seguros y / o toda la información personal almacenada en los
                    mismos.
                  </li>
                </ul>
              </li>
              <li>
                <b>Derecho a cambiar y modificar los Términos:</b> Nos
                reservamos el derecho de modificar estos términos de vez en
                cuando a nuestra entera discreción. Por lo tanto, debes revisar
                estas páginas periódicamente. Cuando cambiemos los Términos de
                una manera material, te notificaremos que se han realizado
                cambios importantes en los Términos. El uso continuado de la
                página web o nuestro servicio después de dicho cambio constituye
                tu aceptación de los nuevos Términos. Si no aceptas alguno de
                estos términos o cualquier versión futura de los Términos, no
                uses o accedas (o continúes accediendo) a la página web o al
                servicio.
              </li>
            </ul>
          </ModalBody>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terminos;
