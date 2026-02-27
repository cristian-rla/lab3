import {useEffect, useState } from "react"
import { Message } from "./message"

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        username:'jorgecavel',
        email:'jorgecavel@hotmail.com'
    })

    const {username, email} = formState;

    const onInputChange = ({target}:any) => { // el target aqui es el input que se esta modificando, y el name es el nombre del input, y el value es el valor del input
        const {name, value} = target;
        setFormState({...formState, [name]: value}) // lo que hace esta linea es actualizar el formState, pero solo el atributo que se esta modificando, por eso se hace un spread del formState y luego se actualiza el atributo que se esta modificando con el valor del input

    }

    useEffect(() => {
        console.log('useEffect called');
    }, []) // el array vacio hace que el useEffect se ejecute solo una vez, cuando el componente se monta

    useEffect(() => {
        console.log('formState changed');
    }, [formState]) // el array con formState hace que el useEffect se ejecute cada vez que el formState cambia

    useEffect(() => {
        console.log('email changed');
    }, [email]) // el array con email hace que el useEffect se ejecute cada vez que el email cambia

    return (
        <>
            <h1>Formulario Simple</h1>
            <input type = 'text' className="form-control" placeholder="Username" name="username"
            value= {username}
            onChange = {onInputChange} 
            />

            <input type = "text" className="form-control mt-2" placeholder="jorge@hotmail.com" name = "email"
            value = {email}
            onChange = {onInputChange}
            />

            {(username === 'strider2') && <Message/> }
        
        </>
    )
}