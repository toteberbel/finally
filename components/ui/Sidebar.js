import React, { useContext } from "react";
import Link from "next/link";
import { FirebaseContext } from "../../fb";

const Sidebar = () => {
  const { usuario } = useContext(FirebaseContext);
  return (
    <div id="sidebar-wrapper">
      <div className="list-group list-group-flush">
        <Link href="/">
          <a className="list-group-item itemSidebar list-group-item-action">
            Home
          </a>
        </Link>

        <Link href="soy-profesor">
          <a className="list-group-item itemSidebar list-group-item-action ">
            Soy profesor
          </a>
        </Link>
        {usuario && (
          <Link href="/publicar-anuncio">
            <a className="list-group-item itemSidebar list-group-item-action ">
              Publicar una clase
            </a>
          </Link>
        )}

        {usuario ? (
          <Link href="buscar-grupo">
            <a className="list-group-item itemSidebar list-group-item-action ">
              Grupos de WhatsApp
            </a>
          </Link>
        ) : (
          <a
            href="!#"
            className="list-group-item itemSidebar list-group-item-action "
            data-toggle="modal"
            data-target="#exampleModalCenter"
          >
            Grupos de WhatsApp
          </a>
        )}

        <Link href="buscar-profesor">
          <a className="list-group-item itemSidebar list-group-item-action ">
            Buscar profesor
          </a>
        </Link>

        <Link href="/contacto">
          <a className="list-group-item itemSidebar list-group-item-action">
            Contacto
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
