import React from 'react'

import {
    Button,   
    FormGroup,
    Form,
    Input,
    Row,
    Col,
  } from "reactstrap";

const TerceroForm = ( {formData, onInputChange, handleSubmit, success} ) => {
  return (
            <Form onSubmit={handleSubmit}>
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
                          onChange={onInputChange}
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
                          onChange={onInputChange}
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
                              onChange={onInputChange}
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
                          onChange={onInputChange}
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
                          onChange={onInputChange}
                          required
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
                          onChange={onInputChange}
                          required
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
                          onChange={onInputChange}
                          required
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
                          onChange={onInputChange}
                          required
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="6">
                      <FormGroup>
                        <label>Cedula</label>
                        <Input                          
                          type="file"
                          placeholder="Cargue la cedula" 
                          name="cedula"                         
                          id="cedula"
                          onChange={onInputChange}
                          
                        />
                      </FormGroup>
                    </Col>
                    <Col className="px-1" md="6">
                      <FormGroup>
                        <label>Certificado Laboral</label>
                        <Input    
                          type="file"                      
                          placeholder="Cargue el certificado laboral"                         
                          name="certificado_laboral"                         
                          id="certificado_laboral"
                          onChange={onInputChange}
                          
                        />
                      </FormGroup>
                    </Col>                    
                  </Row>               
                  <Row>
                    <div className="update ml-auto mr-auto">
                      
                      <Button
                        className="btn-round"
                        color="primary"
                        type="submit"
                        disabled={success} 
                      >
                        Guardar
                      </Button>
                    </div>
                  </Row>
                </Form>
         
  )
}

export default TerceroForm;