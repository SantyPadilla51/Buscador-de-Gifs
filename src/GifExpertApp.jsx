import { useState } from "react"
import { AddCategoria, GifGrid } from "./components"

export const GifExpertApp = () => {

  const [categorias, setCategorias] = useState([''])

  const onAddCategory = (e) => {
    if (categorias.includes(e)) return;
    setCategorias([e, ...categorias]);
  }

  return (
    <>
      <h1>Busca tus Gifs aqui</h1>

      <AddCategoria onNuevaCategoria={onAddCategory} />

      {categorias.map((categoria) => (
        <GifGrid
          key={categoria}
          categoria={categoria}
        />
      ))}
    </>
  )
}
