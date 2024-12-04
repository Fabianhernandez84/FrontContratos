import axios from '../../../services/axiosConfig'


export const getApiReferencias = async() => {    

    const resp = await axios.get('referencia/');
    const { data } = resp;
    return data

}


export const crearApiReferencias = async(data) =>{

    const response = await axios.post('referencia/', data);
    return response.data
}


export const UpdateApiReferencia = async(id,data) => {

    const response = await axios.put(`referencia/${id}/`, data);
    return response.data
}

export const deleteApiReferencias = async(id,data) => {

    const response = await axios.put(`referencia/${id}/`, data);
    return response.data
}

export const getApiReferenciaById = async(id) =>{
    
    const resp = await axios.get(`referencia/${id}`);
    const { data } = resp;
    return data

}