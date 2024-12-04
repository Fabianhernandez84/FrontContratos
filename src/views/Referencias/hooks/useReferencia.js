import { useState } from "react";
import { getApiReferencias, 
        crearApiReferencias,
        deleteApiReferencias,
        getApiReferenciaById ,
        UpdateApiReferencia
    } from "../helpers/ReferenciaService"

export const useReferencia = () => {
   
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const [alertMessage, setAlertMessage] = useState({});

    const getReferencias = async() => {
        
        const data = await getApiReferencias();
        return data      
        setIsLoading(false)
    }

    const getReferenciasById = async(id) => {
        
        const data = await getApiReferenciaById(id)
        return data
        setIsLoading(false)
    }

    const deleteReferencia = async(id) => {
        
        try {

            const data = await deleteApiReferencias(id);           
            const message = {
                color:"info",
                message:"Eliminado correctamente",
            }
            setAlertMessage(message)
            setSuccess(true)          

        } catch(errors){
            const message = {
                color:"danger",
                message:"Error Eliminando...",
            }
            setAlertMessage(message)
            setSuccess(true)     
        }

      
    }


    const submitForm = async(data) => {

        try {
            const response = await crearApiReferencias(data);
            setSuccess(true);
            return response;
        }
        catch(err)
        {
            setError(err.message);
        }        
    }

    const updateSubmitForm = async(id,data) => {
        try{

            const response = await UpdateApiReferencia(id,data);
            setSuccess(true);
            return response;

        }catch(errors){

        }
   }

    return {
        getReferencias,
        getReferenciasById,
        submitForm,
        updateSubmitForm,
        deleteReferencia,
        alertMessage,
        isLoading,        
        error,
        success,
    }
}

export default useReferencia;