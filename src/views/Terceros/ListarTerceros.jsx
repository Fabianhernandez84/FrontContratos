
import React, { useState,useEffect } from "react";

import useTerceros from "./hooks/useTerceros";
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


// reactstrap components
import {
  Card,
  UncontrolledAlert,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";

const TercerosList = () => {
    
    const { getTerceros, deleteTerceros, isLoading,success, alertMessage  } = useTerceros()
    const navigate = useNavigate();

    const [terceros, setTerceros] = useState([]) 

    const getTercerosHandle = async() => {
        const dataTerceros = await getTerceros();
        setTerceros(dataTerceros);

    }
    const deleteHandleSubmit = async(id) => {
        await deleteTerceros(id);
        
        const nuevosTerceros = terceros.filter( (item) => item.id !== id );
        setTerceros(nuevosTerceros)
    };

    const editHandleSubmit = async(id) =>{    
      navigate(`/admin/terceros/editar/${id}`);
    }

    const viewHandleSubmit = async(id) =>{    
      navigate(`/admin/terceros/ver/${id}`);
    }

    const referenciaHandleSubmit = async(id) => {
      navigate(`/admin/referencias/crear/${id}`);
    }

    useEffect ( () => {
      getTercerosHandle();
  }, [])


  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <div className="d-flex bd-highlight">
                  <div className="p-2 flex-grow-1 bd-highlight">
                    <CardTitle tag="h4">Lista de Terceros</CardTitle>
                  </div>
                  <div className="p-2 bd-highlight">
                    <CardTitle><NavLink to={"/admin/terceros/crear"} className="btn btn-primary btn-md">+ Nuevo Tercero</NavLink></CardTitle>
                  </div>
                </div>                
              </CardHeader>

              {success &&
              <Row >
                <Col md="8">
                  <div className="pr-2">
                    <UncontrolledAlert  className="alert-with-icon"
                                color={alertMessage.color}
                                fade={false}
                              >
                      <span
                        data-notify="icon"
                        className="nc-icon nc-bell-55"
                      />
                      <span data-notify="message">
                        {alertMessage.message}
                      </span>
                    </UncontrolledAlert>
                  </div>
                </Col>
              </Row>
              }
              <CardBody>
                <Table responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>#</th>
                      <th>Nombre</th>
                      <th>Identificacion</th>
                      <th>Telefono</th>
                      <th>Correo Electronico</th>
                      <th className="text-left">Ingresos</th>   
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    { terceros.map( value => (
                        <tr>
                          <td>{value.id}</td>
                          <td>{value.nombre}</td>
                          <td>{value.identificacion}</td>
                          <td>{value.telefono}</td>
                          <td>{value.email}</td>                        
                          <td className="text-left">{value.ingresos}</td>
                          <td>
                            <div className="flex-row">
                                <div className="d-inline-flex">
                                  <button 
                                      className="btn btn-sm btn-info"
                                      onClick={ (event) => viewHandleSubmit(value.id)}>
                                    <i className="nc-icon nc-alert-circle-i"></i></button>
                                </div>
                                <div className="d-inline-flex p-1">
                                  <button 
                                      className="btn btn-sm btn-warning"
                                      onClick={(event) => editHandleSubmit(value.id)}                                  
                                    ><i className="nc-icon nc-badge"></i></button>
                                </div>

                                <div className="d-inline-flex p-1">
                                  <button 
                                      className="btn btn-sm btn-primary"
                                      onClick={(event) => referenciaHandleSubmit(value.id)}                                  
                                    ><i className="nc-icon nc-badge"></i></button>
                                </div>

                                <div className="d-inline-flex p-1">
                                  <button className="btn btn-sm btn-danger"
                                    onClick={ (event) => deleteHandleSubmit(value.id) }
                                  ><i className="nc-icon nc-simple-remove"></i></button>
                                </div>
                            </div>
                          </td>
                        </tr>

                    ))}
                   
                  
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>         
        </Row>
      </div>
    </>
  );
}

export default TercerosList;
