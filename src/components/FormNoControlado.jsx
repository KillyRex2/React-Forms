import {useRef} from 'react'
const FormNoControlado = () => {
   
   const formulario = useRef(null);
   const handleSubmit = e => {
        e.preventDefault();
        
        const datos = new FormData(formulario.current)

        
        const objectData = Object.fromEntries([...datos.entries()])
        console.log(objectData)

        const {todoDescription, todoName} = objectData
        if(!todoDescription.trim() || !todoName.trim()){
            console.log('Empty')
            return
        } 
        console.log('all set')
        
   }
   
    return (
        <>
            <h2>No Controlado</h2>
            <form ref = {formulario} onSubmit={handleSubmit}>
                <input 
                type="text"
                placeholder="Ingrese To do" 
                name="todoName"
                className="form-control mb-2"
                defaultValue="Tarea #01"
                />

                <textarea 
                    name="todoDescription"
                    placeholder="Ingrese descripcion del to do"
                    className="form-control mb-2"
                    defaultValue="Descripcion de Tarea #01"
                />

                <select 
                    name="todoEstado"
                    className="form-control mb-2"
                    defaultValue="pendiente"
                >
                    <option value="pendiente">Pendiente</option>
                    <option value="completada">Completada</option>
                </select>
                <button className="btn btn-primary">Agregar</button>

            </form>
        </>
    )
}

export default FormNoControlado
