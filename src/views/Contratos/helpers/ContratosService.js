import axios from '../../../services/axiosConfig'


export const getApiContratos = async() => {    

    const resp = await axios.get('contratos/');
    const { data } = resp;
    return data

}

export const getApiContratoById = async(id) =>{
    
    const resp = await axios.get(`contratos/${id}`);
    const { data } = resp;
    return data

}

export const crearApiContratos = async(data) =>{

    const response = await axios.post('contratos/', data);
    return response.data
}

export const UpdateApiContrato = async(id,data) => {

    const response = await axios.put(`contratos/${id}/`, data);
    return response.data
}

export const deleteApiContratos= async(id) =>{
    const response = await axios.delete(`contratos/${id}`);
    return response
  
}

