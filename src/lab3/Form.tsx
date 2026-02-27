import {useRef, useState, type RefObject} from 'react';
import './Form.css';

/*
Matricula
Nombre
Apellidos
Edad
Universidad
Carrera
*/

interface FormData {
    matricula: string;
    nombre: string;
    apellidos: string;
    edad: number;
    universidad: string;
    carrera: string;
}

// current es el valor actual del input, y el focus es la funcion que se ejecuta cuando el usuario hace click en el input, y el error es el mensaje de error que se muestra cuando el usuario no llena un campo requerido
// current puede ser null al desmontarse el objeto o antes de montarse. La funcion puesta en ref se ejecuta al montarlo y desmontarlo, por lo que el current puede ser null en ambos casos. Por eso se usa el operador de encadenamiento opcional (?.) para evitar errores al intentar acceder a current cuando es null.
// por eso mismo tuve que poner | null. 
interface InputRefs {
    matriculaRef :RefObject<HTMLInputElement | null>;
    nombreRef : RefObject<HTMLInputElement | null>;
    apellidosRef : RefObject<HTMLInputElement | null>;
    edadRef : RefObject<HTMLInputElement | null>;
    universidadRef : RefObject<HTMLInputElement | null>;
    carreraRef : RefObject<HTMLInputElement | null>;
}

export const Form = () => {
    const [form, setForm] = useState<FormData>({
        matricula: '',
        nombre: '',
        apellidos: '',
        edad: 0,
        universidad: '',
        carrera: ''
    });

    const [finalForm, setFinalForm] = useState<FormData | null>(null);
    
    const [error, setError] = useState<string>('');

    const inputRefs: InputRefs = {
        matriculaRef: useRef<HTMLInputElement>(null),
        nombreRef: useRef<HTMLInputElement>(null),
        apellidosRef: useRef<HTMLInputElement>(null),
        edadRef: useRef<HTMLInputElement>(null),
        universidadRef: useRef<HTMLInputElement>(null),
        carreraRef: useRef<HTMLInputElement>(null)
    };

    const onSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        const {matricula, nombre, apellidos, edad, universidad, carrera} = form;
        if (matricula.trim() === ''){
            inputRefs.matriculaRef?.current?.focus();
            setError('La matricula es requerida');
            return;
        }
        if(nombre.trim() === ''){
            inputRefs.nombreRef?.current?.focus();
            setError('El nombre es requerido')
            return;
        }
        if(apellidos.trim() === ''){
            inputRefs.apellidosRef?.current?.focus();
            setError('Los apellidos son requeridos');
            return;
        }
        if(edad === 0){
            inputRefs.edadRef?.current?.focus();
            setError('La edad es requerida');
            return;
        }
        if(edad < 18){
            inputRefs.edadRef?.current?.focus();
            setError('La edad debe ser mayor o igual a 18 años');
            return;
        }
        if(universidad.trim() === ''){
            inputRefs.universidadRef?.current?.focus();
            setError('La universidad es requerida');
            return;
        }
        if(carrera.trim() === ''){
            inputRefs.carreraRef?.current?.focus();
            setError('La carrera es requerida');
            return;
        }
        setError('');
        setFinalForm(form);

    };

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setForm({
            ...form,
            [name]: value
        });
    }

    return (
        <>
        <form className="form" onSubmit={onSubmit}>
            <input type = 'text' ref = {inputRefs.matriculaRef} name = 'matricula' value = {form.matricula} onChange = {onChange} placeholder='matricula'/>
            <input type = 'text' ref = {inputRefs.nombreRef} name = 'nombre' value = {form.nombre} onChange = {onChange} placeholder='nombre'/>
            <input type = 'text' ref = {inputRefs.apellidosRef} name = 'apellidos' value = {form.apellidos} onChange = {onChange} placeholder='apellidos'/>
            <input type = 'number' ref = {inputRefs.edadRef} name = 'edad' value = {form.edad} onChange = {onChange} placeholder='edad'/>
            <input type = 'text' ref = {inputRefs.universidadRef} name = 'universidad' value = {form.universidad} onChange = {onChange} placeholder='universidad'/>
            <input type = 'text' ref = {inputRefs.carreraRef} name = 'carrera' value = {form.carrera} onChange = {onChange} placeholder='carrera'/>
            <button type = 'submit'>Registrarse</button>

        </form>
        {error && <p style={{color: 'red'}}>{error}</p>}


        {finalForm && (
            <div>
                <h2>Formulario Final</h2>
                <p>Matrícula: {finalForm.matricula}</p>
                <p>Nombre: {finalForm.nombre}</p>
                <p>Apellidos: {finalForm.apellidos}</p>
                <p>Edad: {finalForm.edad}</p>
                <p>Universidad: {finalForm.universidad}</p>
                <p>Carrera: {finalForm.carrera}</p>
            </div>
        )}
        </>
    );

}