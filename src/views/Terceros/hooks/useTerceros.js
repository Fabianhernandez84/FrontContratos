import { useState } from "react";
import { getApiTerceros, 
        postApiCrearTerceros,
        dellApiTerceros,
        getApiTerceroById ,
        UpdateApiTerceros,
        referenciaByTercero,
    } from "../helpers/TercerosService"

export const useTerceros = () => {
   
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const [alertMessage, setAlertMessage] = useState({});

    const getTerceros = async() => {
        
        const data_terceros = await getApiTerceros();
        return data_terceros      
        setIsLoading(false)
    }

    const getTerceroById = async(id) => {
        
        const data = await getApiTerceroById(id)
        return data
        setIsLoading(false)
    }

    const deleteTerceros = async(id) => {
        
        try {

            const data = await dellApiTerceros(id);           
            const message = {
                color:"info",
                message:"Eliminado corecctamente",
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
            const response = await postApiCrearTerceros(data);
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

            const response = await UpdateApiTerceros(id,data);
            setSuccess(true);
            return response;

        }catch(errors){

        }
   }

   const getReferenciaByTercero = async(id) => {
            try{
                const data_id = {
                    tercero : id
                }

                const response = await referenciaByTercero(data_id);
                setSuccess(true);
                return response;

            }catch(errors){

            }
   }

    return {
        getTerceros,
        getTerceroById,
        submitForm,
        updateSubmitForm,
        deleteTerceros,
        getReferenciaByTercero,
        alertMessage,
        isLoading,        
        error,
        success,    
        
    }
}

export default useTerceros;