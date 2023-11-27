import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const DataContext = createContext()

function DataProvoder(props){
    const [data, setData]= useState([])
    const localData = JSON.parse(localStorage.getItem("user-data"))

    useEffect(()=>{
        if(localData){
            setData(localData)
        }
    }, [])

    return(
        <DataContext.Provider value={{data, setData}}>
            {props.children}
        </DataContext.Provider>
    )
}

export default DataProvoder;