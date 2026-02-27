import { useRef } from "react";
    
export const Focus = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const onClick = () => {
        //document.querySelector('input').select();
        inputRef.current?.select(); // el ? es para evitar que si el inputRef.current es null, no se ejecute el select y no se lance un error
    }
    
    return (
        <>
            <h1>Pantalla Focus</h1>
            <hr></hr>
            <input type="text" placeholder="Nombre" className="form-control"></input>
            <input type="text" placeholder="Apellido" className="form-control"></input>
            <input ref={inputRef} type="text" placeholder="Edad" className="form-control"/>
            <input type="textarea" placeholder="Comentarios" className="form-control"></input >
            <button className="btn btn-primary mt2" onClick={onClick}>Set focus</button>
        </>)
}