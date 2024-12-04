import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; 
import ContratosForm from "./components/ContratosForm";
import useContratos from './hooks/useContratos';
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody, 
  CardTitle, 
  Row,
  Col,
} from "reactstrap";

const CrearContratos = () => {

  const [formData, setFormData] = useState({
    nombre: '',
    fecha_inicio: '',
    fecha_fin: '',
    lugar: '',
    descripcion:'',
    documento: '',
    contratante:'',
    cliente:'',
    estado:'',
    valor_contrato:'',
  });

  const { isLoading, error, success, submitForm } = useContratos();


  const onInputChange = (e) => {
    const { name, value, files } = e.target;
    
    setFormData({
      ...formData,      
      [name]: files ? files[0] : value,
    });
    console.log(name,value )
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
                    <CardTitle tag="h5">Crear Contrato</CardTitle>
                  </div>
                  <div className="p-2 bd-highlight">
                    <CardTitle><NavLink to={"/admin/contratos/lista"} className="btn btn-default btn-md"> Regresar</NavLink></CardTitle>
                  </div>
                </div>

              </CardHeader>
              <CardBody>
                <ContratosForm 
                    formData={formData} 
                    onInputChange={onInputChange} 
                    handleSubmit={handleSubmit}
                    success = {success}
                    />
              </CardBody>

              {error && <p style={{ color: 'red' }}>{error}</p>}
              {success && <p style={{ color: 'green' }}>Contrato creado con éxito!</p>}

            </Card>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default CrearContratos;
