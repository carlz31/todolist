
import React, {Fragment, useState, useRef} from "react";
import {v4 as uuid} from 'uuid';

/**IMPORTAR A TODO ITEM */

import { Todoitem } from "./Todoitem";


export function Todolist(){
/**DEFINIR UNA LISTA CON TAREAS  */
    const [todos, settodos] = useState([]);
    const taskRef = useRef();

    const marcarimportante = () =>{

    }
     

    const agregartarea = () =>{
        /**RESCATAR EL VALOR DEL INPUT */
        const task = taskRef.current.value 
        console.log(task);
        console.log(uuid());

        if(task.trim=== '') return;
        console.log('agregando tarea...');
       
/**METODO DEFINDO POR REACT PARA OPERAR LOS ELEMENTOS */
        settodos((prevtodos) =>{
            const newtask = {
                titulo:'',
                descripcion:'text',
                task:task,
                borrar:'x',
                importante: false,
            };

            return[...prevtodos, newtask];
        });
        taskRef.current.value = null;
    };

    const Resumentareas = () => {
        const cant = cantidadtareas();

        if (cant===0){
            return(
                <div className="alert alert-success mt-3">
                    no tienes tareas pendientes 0.o
                </div>
            )
        }
        if (cant===1){
            return(
                <div className="alert alert-info mt-3">
                    Te queda solo una tarea pendiente
                </div>
            )
        }
        return(
            <div className="alert alert-danger mt-3">
                    Te queda {cant} tarea pendiente
                </div>
        )
    };

    const cantidadtareas = () =>{
        return todos.filter((todo) => !todo.importante).length;
    };

    const cambiarestadotarea = (titulo) => {
        console.log(titulo)
      /**TOMAR TODOS LOS DATOS D ELA LISTA ACTUAL  */
      const newtodos = [...todos]
      /*BUSCAR EN LA LISTA EL ID*/
      const todo = newtodos.find((todo)=>todo.
      titulo === titulo)
      todo.importante = !todo.importante;
      settodos(newtodos)
    };

    const eliminartareascompletas = () => {
        const newtodos = todos.filter((todo) => !todo.importante)
        settodos(newtodos);
    }


    return(
        <Fragment>
            <h1> Post It Simulator!</h1>
            <div className="imput-group">
                <input type="Titulo" ref={taskRef} className="text-fluid ms-2" placeholder="Titulo"/>
                <input type="Descripcion" className="text-fluid ms-2" placeholder="Descripcion"/>
                {/**MARCAR IMPORTANTE */}
                <button className="btn btn-secundary ms-2" onClick={eliminartareascompletas}><i class="bi bi-file-earmark-check-fill"></i></button> importante
                {/**AGREGAR TAREA */}
                <button type="Agregar" className="btn btn-secondary btn-lg text-fluid ms-2" onClick={agregartarea}>Agregar</button>
            </div>
            <div>
                <ul className="list-group my-4">
                    {todos.map((todo) => (
                      <Todoitem todo={todo} key={todo.titulo} cambiarestado={cambiarestadotarea}></Todoitem>
                    ))}
                </ul>
            </div>
            <Resumentareas />
        </Fragment>
    )
}