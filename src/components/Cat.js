//Instalaremos las siguientes bibliotecas: npm install @tanstack/react-query | npm install axios

//Basicamente, lo que estamos haciendo en el Cat.js es el mismo procedimiento de los fetchs con la libreria Axios, 
//pero en vez de hacerlo en la funcion principal, lo hacemos en un componente aparte para que el codigo de la main
//quede mas limpio y sea mas visual.

//Para que el codigo nos quede mucho mas limpio, en este caso, el del componente, crearemos otro componente (useGetCat.js) mas para implementar
//la logica de tanstanck y de axios.

import { useGetCat } from "../useGetCat";

export const Cat = () => {
        const {data, isCatLoading, refetchData } = useGetCat();
        if (isCatLoading) return <h1> Loading . . . </h1>
    return (
        <div>
            <button onClick={refetchData}> refetch</button>
            <h1> {data?.fact} </h1>
        </div>
    )
};