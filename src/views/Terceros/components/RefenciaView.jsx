import React from 'react'

import {
    Button,   
    FormGroup,
    Form,
    Input,
    Row,
    Col,
  } from "reactstrap";

const RefenciaView = ( {formData} ) => {
  return (

            <Form>
                     <Row>                    
                        <Col className="pr-1" md="6">
                       
                      Referencias :
                   
                        </Col>
                      </Row>
                   <Row>                    
                    <Col className="pr-1" md="6">
                      <FormGroup>
                        <label>Nombre</label>
                        <Input  
                          type="text"                                      
                          placeholder="Jhon Doe"                         
                          name="nombre"
                          id="nombre"
                          value={formData.nombre}
                          
                          required
                        />
                      </FormGroup>
                    </Col>
                    <Col className="px-1" md="6">
                      <FormGroup>
                        <label>Identificacion</label>
                        <Input   
                          type="text"                      
                          placeholder="123456789"
                          name="identificacion"                          
                          id="identificacion"
                          value={formData.identificacion}
                          
                          required
                        />
                      </FormGroup>
                    </Col>                    
                  </Row>
                  <Row>
                    <Col className="pr-1" md="6">
                        <FormGroup>
                          <label htmlFor="exampleInputEmail1">
                            Correo Electronico
                          </label>
                          <Input 
                              type="email"
                              placeholder="Email"                             
                              name="email"
                              id="email"
                              value={formData.email}
                              
                              required />
                        </FormGroup>
                      </Col>
                    <Col className="pr-1" md="6">
                      <FormGroup>
                        <label>Direccion</label>
                        <Input     
                          type="text"                    
                          placeholder="calle #1-23"                         
                          name="direccion"
                          id="direccion"
                          value={formData.direccion}
                          
                          required
                        />
                      </FormGroup>
                    </Col>                   
                  </Row>
                  <Row>
                    <Col className="pr-1" md="3">
                      <FormGroup>
                        <label>Telefono</label>
                        <Input  
                          type="text"                       
                          placeholder="313-554525"
                          name="telefono"
                          id="telefono"
                          value={formData.telefono}
                          
                        />
                      </FormGroup>
                    </Col>                 
                    </Row>                
                </Form>
         
  )
}

export default RefenciaView;