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

const ReferenciaForm = ( {formData, onInputChange, handleSubmit, success, id_tercero} ) => {

        const { getTerceros } = useTerceros()
      
        const [terceros, setTerceros] = useState([]) 
        
        const GetTerceriosHandler = async() => {
            const data = await getTerceros()          
            const newData = data.filter( (item) => item.id == id_tercero)
          
            setTerceros(newData)
        }
        useEffect ( () => {
          GetTerceriosHandler();
      }, [])

      
  return (
            <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col className="pr-1" md="6">
                        <FormGroup>
                            <label>Cliente</label>
                            <Input                        
                            type="select"                                               
                            name="tercero"
                            id="tercero"
                            value={formData.tercero}
                            onChange={onInputChange}
                            required
                            >
                            <option key="0" value="0">
                                --Seleccione una opcion --
                              </option>
                            {terceros.map((item) => (
                                <option key={item.id} value={item.id}>
                                {item.nombre}
                                </option>
                            ))}
                            </Input>
                        </FormGroup>
                    </Col>

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

export default ReferenciaForm