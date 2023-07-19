import {useFetchGifs} from "../hooks/useFetchGifs.js";
import { GifItem } from "./GifItem.jsx";

export const GifGrid = ({ categoria }) => {

    const {imagenes, isLoading} = useFetchGifs(categoria)

    return (
        <>
            <h3>{categoria}</h3>
            { isLoading && (<h2>Cargando..</h2>)}

            <div className="card-grid">
                {
                    imagenes.map( (img)  => (
                        <GifItem 
                            key= {img.id}
                            { ...img }
                        />
                    ))
                }
            </div>
        </> 
    )
}
