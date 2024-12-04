import { useState } from "react";
import { getApiUsuarios } from "../helpers/UsuariosService"

export const useUsuarios = () => {
   
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const [alertMessage, setAlertMessage] = useState({});

    const getUsuarios = async() => {
        
        const data = await getApiUsuarios();
        return data      
        setIsLoading(false)
    }


    return {
        getUsuarios,       
        alertMessage,
        isLoading,        
        error,
        success,    
        
    }
}

export default useUsuarios;