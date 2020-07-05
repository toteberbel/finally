import React, { useState, useEffect, useContext } from "react";
import { FirebaseContext } from "../fb";

const useGrupos = (facultad, tipo) => {
    const [grupos, guardarGrupos] = useState([]);
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const obtenerGrupos = () => {
      firebase.db.collection(`${tipo}-${facultad}`).onSnapshot(manejarSnapshot);
    };
    obtenerGrupos();
  }, [tipo]);

  function manejarSnapshot(snapshot) {
    const grupos = snapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
      

    guardarGrupos(grupos);
  }
  return {
    grupos,
  }
};

export default useGrupos;