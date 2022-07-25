import React from "react";

/**DEBO RECIBIR LOS PROPS */
export function Todoitem({todo, cambiarestado}){
  const {titulo, descripcion, task, borrar, importante} = todo;
  const fncambiarestado = () => {
    cambiarestado(titulo)
  }
    return (
        <li className="list-group-item">
          <input type="checkbox" onChange={fncambiarestado}
          className="form-check-input me-2" checked={importante}/>
          {task}
        </li>
   );
}

