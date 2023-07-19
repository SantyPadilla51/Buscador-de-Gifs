import { useState } from "react"

export const AddCategoria = ({onNuevaCategoria}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target}) => {
        setInputValue(target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length <= 1) return;
        //Agregar el inputValue al arreglo de categorias
        onNuevaCategoria(inputValue);
        setInputValue('')
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="Buscar gifs" onChange={(e) => onInputChange(e)} value={inputValue}/>
            </form>
           
        </>
    )
}
