import { useState } from "react";
import { getApiContratos, 
        crearApiContratos,
        deleteApiContratos,
        getApiContratoById ,
        UpdateApiContrato
    } from "../helpers/ContratosService"

export const useContratos = () => {
   
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const [alertMessage, setAlertMessage] = useState({});

    const getContratos = async() => {
        
        const data_contratos = await getApiContratos();
        return data_contratos      
        setIsLoading(false)
    }

    const getContratoById = async(id) => {
        
        const data = await getApiContratoById(id)
        return data
        setIsLoading(false)
    }

    const deleteContrato = async(id) => {
        
        try {

            const data = await deleteApiContratos(id);           
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
            const response = await crearApiContratos(data);
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

            const response = await UpdateApiContrato(id,data);
            setSuccess(true);
            return response;

        }catch(errors){

        }
   }

    return {
        getContratos,
        getContratoById,
        submitForm,
        updateSubmitForm,
        deleteContrato,
        alertMessage,
        isLoading,        
        error,
        success,   
        
    }
}

export default useContratos;