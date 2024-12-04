import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; 
import  ReferenciaForm from "./components/ReferenciaForm";
import useReferencia from './hooks/useReferencia';

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

const CrearReferencia = () => {

  const { id } = useParams(); 

  const [formData, setFormData] = useState({
    nombre: '',
    identificacion: '',
    direccion: '',
    email: '',
    telefono:'',
    tercero:''    
  });

  const { isLoading, error, success, submitForm } = useReferencia();


  const onInputChange = (e) => {
    const { name, value, files } = e.target;
    
    setFormData({
      ...formData,      
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();  
    await submitForm(formData);
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
                    <CardTitle tag="h5">Crear Referencia</CardTitle>
                  </div>
                  <div className="p-2 bd-highlight">
                    <CardTitle><NavLink to={"/admin/terceros/lista"} className="btn btn-default btn-md"> Regresar</NavLink></CardTitle>
                  </div>
                </div>

              </CardHeader>
              <CardBody>
                <ReferenciaForm 
                    formData={formData} 
                    onInputChange={onInputChange} 
                    handleSubmit={handleSubmit}
                    success = {success}
                    id_tercero = {id}
                    />
              </CardBody>

              {error && <p style={{ color: 'red' }}>{error}</p>}
              {success && <p style={{ color: 'green' }}>Referencia creado con éxito!</p>}

            </Card>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default CrearReferencia;
