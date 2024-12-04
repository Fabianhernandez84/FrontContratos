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

const ContratosForm = ( {formData, onInputChange, handleSubmit, success} ) => {

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
                          onChange={onInputChange}
                          required
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
                          onChange={onInputChange}
                          required
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
                              onChange={onInputChange}
                              required />
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
                          onChange={onInputChange}
                          required
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
                          onChange={onInputChange}
                          required
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
                            onChange={onInputChange}
                            required
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
                            onChange={onInputChange}
                            required
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
                          onChange={onInputChange}
                          required
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
                          onChange={onInputChange}
                          required
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="6">
                      <FormGroup>
                        <label>Documento Contrato</label>
                        <Input                          
                          type="file"
                          placeholder="Cargue el contrato" 
                          name="documento"                         
                          id="documento"
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

export default ContratosForm;