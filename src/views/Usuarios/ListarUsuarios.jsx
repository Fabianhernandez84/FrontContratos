
import React, { useState,useEffect } from "react";

import useUsuarios from "./hooks/useUsuarios";
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

const ListarUsuarios = () => {
    
    const { getUsuarios, isLoading,success, alertMessage  } = useUsuarios()
    const navigate = useNavigate();

    const [usuarios, setUsuarios] = useState([]) 

    const getUsuariosHandle = async() => {
        const dataUsuarios = await getUsuarios();
        setUsuarios(dataUsuarios);

    }
    const deleteHandleSubmit = async(id) => {
       console.log(id)
    };

    const editHandleSubmit = async(id) =>{    
    //   navigate(`/admin/usuarios/editar/${id}`);
        console.log(id)
    }

    const viewHandleSubmit = async(id) =>{    
    //   navigate(`/admin/usuarios/ver/${id}`);
        console.log(id)
    }

    useEffect ( () => {
        getUsuariosHandle();
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
                    <CardTitle tag="h4">Lista de Usuarios</CardTitle>
                  </div>
                  <div className="p-2 bd-highlight">
                    <CardTitle><NavLink to={"/admin/usuarios/crear"} className="btn btn-primary btn-md">+ Nuevo Usuario</NavLink></CardTitle>
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
                      <th>Usuario</th>
                      <th>Correo Electronico</th>                    
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    { usuarios.map( value => (
                        <tr>
                          <td>{value.id}</td>
                          <td>{value.username}</td>
                          <td>{value.email}</td>                        
                         
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

export default ListarUsuarios;
