import React from 'react'

import {
    Button,   
    FormGroup,
    Form,
    Input,
    Row,
    Col,
  } from "reactstrap";

const TerceroView = ( {formData,success} ) => {
  return (
            <Form>
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
                            />
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
                    <Col md="3">
                      <FormGroup>
                        <label>Ocupacion</label>
                        <Input                        
                          type="text"
                          placeholder="Ingeniero"
                          name="ocupacion"
                          id="ocupacion"
                          value={formData.ocupacion}
                       />
                      </FormGroup>
                    </Col>
                    <Col md="3">
                      <FormGroup>
                        <label>Contacto</label>
                        <Input                        
                          type="text"
                          placeholder="Jhon Gomez"                          
                          name="contacto"
                          id="contacto"
                          value={formData.contacto}
                        />
                      </FormGroup>
                    </Col>
                    <Col md="3">
                      <FormGroup>
                        <label>Ingresos</label>
                        <Input    
                          type="text"                    
                          placeholder="1.000.000"                         
                          name="ingresos"
                          id="ingresos"
                          value={formData.ingresos}
                        
                        />
                      </FormGroup>
                    </Col>
                  </Row>                 
                </Form>
         
  )
}

export default TerceroView;