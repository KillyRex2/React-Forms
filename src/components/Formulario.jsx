import {useState} from "react/cjs/react.development"
const Formulario = () => {

    const [todo, setTodo] = useState({ 
        todoName: '',
        todoDescription: '',
        todoEstado: 'pendiente',
        todoCheck: false
    })

    const [error, setError] = useState(false)

    const handleSubmit = (e) => { 
        e.preventDefault();
        const {todoName, todoDescription } = todo 
        if (!todoDescription.trim() || !todoName.trim()) {
            setError(true)
            return;
        }
        setError(false)
    };

    const handleChange = e => {
       const { name, value, checked, type } = e.target
       
       setTodo({
            ...todo,
            [name]: type === "checkbox" ? checked : value  
       });
    };

    const PintarError = () => (
        <div className="alert alert-danger">Campos obligatorios</div>
    );

    return (
        <>
            <h2>Formulario controlado</h2>

            {error && <PintarError />}
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                placeholder="Ingrese To do" 
                name="todoName"
                className="form-control mb-2"
                onChange={handleChange}
                value={todo.todoName}
                />

                <textarea 
                    name="todoDescription"
                    placeholder="Ingrese descripcion del to do"
                    className="form-control mb-2"
                    onChange={handleChange}
                    value={todo.todoDescription}
                    
                />

                <select 
                    name="todoEstado"
                    className="form-control mb-2"
                    onChange={handleChange}
                    value={todo.todoEstado}
                >
                    <option value="pendiente">Pendiente</option>
                    <option value="completada">Completada</option>
                </select>
                
                <br/>
                <div className="form-check">
                    <input
                    className="form-check-input" 
                    type="checkbox" 
                    name="todoCheck"
                    cheked={todo.todoCheck}
                    onChange={handleChange}
                    />
                    <label className="from-check-label" htmlFor="flexCheckDefault">
                        Dar prioridad
                    </label>
                </div>
                <br/>


                <button className="btn btn-primary" type="submit">Agregar</button>

            </form>
        </>
    )
}

export default Formulario
