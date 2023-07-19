import { useState, useEffect } from "react";
import {getGifs} from "../helpers/getGifs.js"

export const useFetchGifs = (categoria) => {
    const [imagenes, setImagenes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImagenes = async() => {
        const newImagenes = await getGifs(categoria);
        setImagenes(newImagenes)
        setIsLoading(false)
    }

    useEffect(() => {
        getImagenes();
    }, []);

    return{
        imagenes,
        isLoading
    }
}
