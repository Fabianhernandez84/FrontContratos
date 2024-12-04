
import React, { useState,useEffect } from "react";

import useContratos from "./hooks/useContratos";
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

const ListarContratos = () => {
    
    const { getContratos, deleteContratos, isLoading, success, alertMessage  } = useContratos()

    const navigate = useNavigate();

    const [contratos, setContratos] = useState([]) 
   


    const getContratosHandle = async() => {
        const dataContratos = await getContratos();
        setContratos(dataContratos);

    }
    const deleteHandleSubmit = async(id) => {
        await deleteContratos(id);
        
        const nuevosContratos = contratos.filter( (item) => item.id !== id );
        setContratos(nuevosContratos)
    };

    const editHandleSubmit = async(id) =>{    
      navigate(`/admin/contratos/editar/${id}`);
    }

    const viewHandleSubmit = async(id) =>{    
      navigate(`/admin/contratos/ver/${id}`);
    }

    useEffect ( () => {
      getContratosHandle();
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
                    <CardTitle tag="h4">Lista de Contratos</CardTitle>
                  </div>
                  <div className="p-2 bd-highlight">
                    <CardTitle><NavLink to={"/admin/contratos/crear"} className="btn btn-primary btn-md">+ Nuevo Contrato</NavLink></CardTitle>
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
                      <th>Fecha inicio</th>
                      <th>Fecha fin</th>
                      <th>Lugar</th>
                      <th>Cliente</th>   
                      <th>Estado</th>  
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    { contratos.map( value => (
                        <tr>
                          <td>{value.id}</td>
                          <td>{value.nombre}</td>
                          <td>{value.fecha_inicio}</td>
                          <td>{value.fecha_fin}</td>
                          <td>{value.lugar}</td>                        
                          <td>{value.cliente.nombre}</td>
                          <td>{value.estado.nombre}</td>
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
                                  {/* <button className="btn btn-sm btn-danger"
                                    onClick={ (event) => deleteHandleSubmit(value.id) }
                                  ><i className="nc-icon nc-simple-remove"></i></button> */}
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

export default ListarContratos;
