import React, { useState,useEffect } from "react";
import { NavLink } from 'react-router-dom'; 
import  ContratosView from "./components/ContratosView";
import useContratos from './hooks/useContratos';

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

const VerContratos = () => {

    const { id } = useParams(); 

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

    
    const { isLoading, error, success, getContratoById } = useContratos();
    
    const getContrato = async() =>{

      const data = await getContratoById(id);
      
       setFormData(data)
    }
    
    useEffect ( () => {
      getContrato();
    }, [])

   
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
                    <CardTitle tag="h5">Ver Contrato</CardTitle>
                  </div>
                  <div className="p-2 bd-highlight">
                    <CardTitle><NavLink to={"/admin/contratos/lista"} className="btn btn-default btn-md"> Regresar</NavLink></CardTitle>
                  </div>
                </div>

              </CardHeader>
              <CardBody>
                <ContratosView 
                    formData={formData}                   
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

export default VerContratos;
