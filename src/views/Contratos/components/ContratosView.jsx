import React, { useState,useEffect } from "react";
import useTerceros from "../../Terceros/hooks/useTerceros";

import {
    Button,   
    FormGroup,
    Form,
    Input,
    Row,
    Col,
  } from "reactstrap";

const ContratosView = ( {formData, handleSubmit, success} ) => {

  const { getTerceros } = useTerceros()

  const [terceros, setTerceros] = useState([]) 
  
  const GetTerceriosHandler = async() => {
      const data = await getTerceros()
      setTerceros(data)
  }
  useEffect ( () => {
    GetTerceriosHandler();
}, [])


  return (
            <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col className="pr-1" md="12">
                      <FormGroup>
                        <label>Nombre</label>
                        <Input  
                          type="text"                                      
                          placeholder="Jhon Doe"                         
                          name="nombre"
                          id="nombre"
                          value={formData.nombre}                        
                          
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="px-1" md="4">
                      <FormGroup>
                        <label>Fecha Inicio</label>
                        <Input   
                          type="date"
                          name="fecha_inicio"                          
                          id="fecha_inicio"
                          value={formData.fecha_inicio}
                          
                        />
                      </FormGroup>
                    </Col>                  
                    <Col className="pr-1" md="4">
                        <FormGroup>
                          <label htmlFor="exampleInputEmail1">
                          Fecha fin
                          </label>
                          <Input 
                              type="date"                                                     
                              name="fecha_fin"
                              id="fecha_fin"
                              value={formData.fecha_fin}                             
                               />
                        </FormGroup>
                    </Col>
                    <Col className="pr-1" md="4">
                      <FormGroup>
                        <label>Lugar</label>
                        <Input     
                          type="text"                    
                          placeholder="calle #1-23"                         
                          name="lugar"
                          id="lugar"
                          value={formData.lugar}                         
                          
                        />
                      </FormGroup>
                    </Col>                   
                  </Row>
                  <Row>
                    <Col className="pr-1" md="8">
                      <FormGroup>
                        <label>Descripcion</label>
                        <Input  
                          type="text"                       
                          placeholder="Descripcion..."
                          name="descripcion"
                          id="descripcion"
                          value={formData.descripcion}
                         
                        />
                      </FormGroup>
                    </Col>
                    <Col md="4">
                      <FormGroup>
                        <label>Estado</label>
                        <Input
                            type="select"
                            name="estado"
                            id="estado"
                            value={formData.estado}
                          >
                            <option value="0">Seleccione Estado</option>
                             <option value="1">Activo</option>
                           
                          </Input>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="4">
                      <FormGroup>
                        <label>Contratante</label>
                        <Input
                            type="select"
                            name="contratante"
                            id="contratante"
                            value={formData.contratante}                           
                          >
                            <option value="" disabled>Seleccione un contratante</option>
                            <option value="1">Empresa A</option>
                           
                          </Input>
                      </FormGroup>
                    </Col>
                    <Col md="4">
                      <FormGroup>
                        <label>Cliente</label>
                        <Input                        
                          type="select"                                               
                          name="cliente"
                          id="cliente"
                          value={formData.cliente}                         
                        >
                        {terceros.map((item) => (
                            <option key={item.id} value={item.id}>
                              {item.nombre}
                            </option>
                          ))}
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col md="4">
                      <FormGroup>
                        <label>Valor Contrato</label>
                        <Input    
                          type="text"                    
                          placeholder="1.000.000"                         
                          name="valor_contrato"
                          id="valor_contrato"
                          value={formData.valor_contrato}                         
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
         
  )
}

export default ContratosView;