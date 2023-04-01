import CardItem from "../CardItem/CardItem";
import fetchSimulation from "../utils/Promise";
import Products from "../utils/Products";
import { useState, useEffect } from "react";

const ContainerCardItems = () => {
    const [ datos, setDatos ] = useState ( [] );
    
    useEffect(() => {
        fetchSimulation(Products, 3000)
        .then(resp => setDatos(resp))
        .catch(error => console.log(error))
    }, [])

    return(
        <>
            {
                datos.map( products => {
                    <CardItem
                        key={products.id}
                        title={products.title}
                        precio={products.precio}
                                    
                    />
                })
            }

        </>       
    )
}

export default ContainerCardItems;
