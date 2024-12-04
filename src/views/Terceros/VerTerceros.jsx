import React, { useState,useEffect } from "react";
import { NavLink } from 'react-router-dom'; 
import  TerceroView from "./components/TerceroView";
import RefenciaView from "./components/RefenciaView";
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

const VerTerceros = () => {

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

    const [dataReferencia, setdataReferencia] = useState({
      nombre: '',
      identificacion: '',
      direccion: '',
      email: '',
      telefono:'',
      tercero:''    
  });
    
  const [dataOk, setdataOK] = useState(false)

    const { isLoading, error, success, getTerceroById, getReferenciaByTercero} = useTerceros();
    
    const getTercero = async() =>{

        const data = await getTerceroById(id);
        const dataRef = await getReferenciaByTercero(id)

        setFormData(data)
        setdataReferencia(dataRef)
        
        console.log(dataRef)
        if (dataRef.length > 0) {
          setdataOK(true);
        }
    }
    
    useEffect ( () => {
        getTercero();
        
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
                    <CardTitle tag="h5">Ver Tercero</CardTitle>
                  </div>
                  <div className="p-2 bd-highlight">
                    <CardTitle><NavLink to={"/admin/terceros/lista"} className="btn btn-default btn-md"> Regresar</NavLink></CardTitle>
                  </div>
                </div>

              </CardHeader>
              <CardBody>
                <TerceroView 
                    formData={formData} 
                    success = {success}
                    />
              </CardBody>
          

            </Card>
            </div>
          </Col>
        </Row>

      {dataOk &&
        <Row>
          <Col md="12">
            <Card className="card-user">
              <CardBody>     
                <div className="justify-content-center">
                  <RefenciaView formData={ dataReferencia } />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
         }
      </div>
    </>
  );
}

export default VerTerceros;
