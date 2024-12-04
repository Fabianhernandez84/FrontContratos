import axios from '../../../services/axiosConfig'


export const getApiUsuarios = async() => {    

    const resp = await axios.get('usuarios/');
    const { data } = resp;
    return data

}