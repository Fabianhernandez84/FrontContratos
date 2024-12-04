import React, { useState,useEffect } from "react";
import { NavLink } from 'react-router-dom'; 
import  TerceroForm from "./components/TerceroForm";
import useTerceros from './hooks/useTerceros';

import { useParams } from 'react-router-dom';

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody, 
  CardTitle, 
  Row,
  Col,
} from "reactstrap";

const EditarTerceros = () => {

    const { id } = useParams(); 

    const [formData, setFormData] = useState({
        nombre: '',
        identificacion: '',
        direccion: '',
        email: '',
        telefono:'',
        ocupacion: '',
        contacto:'',
        ingresos:'',
        cedula:'',
        certificado_laboral:'',
    });

    
    const { isLoading, error, success, getTerceroById, submitForm, updateSubmitForm} = useTerceros();
    
    const getTercero = async() =>{

        const data = await getTerceroById(id);

        console.log(data)
        setFormData(data)
    }
    
    useEffect ( () => {
        getTercero();
    }, [])

   
 


  const onInputChange = (e) => {
    const { name, value, files } = e.target;
    
    setFormData({
      ...formData,      
      [name]: files ? files[0] : value,
    });
  };

  const handleUpdateSubmit = async(e) => {
    e.preventDefault();  
    const update = await updateSubmitForm(id, formData);
    console.log(update);
  };


  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <div className="justify-content-center">
            <Card className="card-user">             
                <CardHeader>
                <div className="d-flex bd-highlight">
                  <div className="p-2 flex-grow-1 bd-highlight">
                    <CardTitle tag="h5">Editar Tercero</CardTitle>
                  </div>
                  <div className="p-2 bd-highlight">
                    <CardTitle><NavLink to={"/admin/terceros/lista"} className="btn btn-default btn-md"> Regresar</NavLink></CardTitle>
                  </div>
                </div>

              </CardHeader>
              <CardBody>
                <TerceroForm 
                    formData={formData} 
                    onInputChange={onInputChange} 
                    handleSubmit={handleUpdateSubmit}
                    success = {success}
                    />
              </CardBody>

              {error && <p style={{ color: 'red' }}>{error}</p>}
              {success && <p style={{ color: 'green' }}>¡Tercero creado con éxito!</p>}

            </Card>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default EditarTerceros;
