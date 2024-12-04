import axios from '../../../services/axiosConfig'


export const getApiTerceros = async() => {    

    const resp = await axios.get('terceros/');
    const { data } = resp;
    return data

}

export const getApiTerceroById = async(id) =>{
    
    const resp = await axios.get(`terceros/${id}`);
    const { data } = resp;
    return data

}

export const postApiCrearTerceros = async(data) =>{

    const response = await axios.post('terceros/', data);
    return response.data
}

export const UpdateApiTerceros = async(id,data) => {

    const response = await axios.put(`terceros/${id}/`, data);
    return response.data
}

export const dellApiTerceros= async(id) =>{
    const response = await axios.delete(`terceros/${id}`);
    return response
  
}

export const referenciaByTercero = async(data) => {
    const response = await axios.post(`terceros/referencias/`, data);
    return response.data
}