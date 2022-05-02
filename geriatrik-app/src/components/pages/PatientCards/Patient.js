import React, { useEffect } from 'react'
import {useState} from 'react'
import OldMan from '../../layout/images/OldManPic.jpg'
import './Patient.css' 
import  TestButton  from '../../TestButton'
import TestGraph from '../../graph/TestGraph'
import { Bar } from "react-chartjs-2";
import ListCardTest from './ListCardTest'
import { useParams } from "react-router-dom";

const HomeLink = "/";

const Details = (props) => {
  const [datos, setData] = React.useState(null);
  const pacienteID = 1;
  let valuesArray; 

  React.useEffect(() => {
    fetch(`/tamizaje/${encodeURIComponent(pacienteID)}"`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => setData(data.message));
    }, []);
  // console.log(datos);

  if(datos) {
    datos.map((currentTest) => {
      valuesArray = JSON.parse(currentTest.respuestasJSON);
      // console.log(valuesArray)
      // console.log(valuesArray.resultados.abstraccion)
    })
  }

  // if (valuesArray) {
  //   valuesArray.map((dato) => {
  //     console.log(dato)
  //   })
  // }

const examenes = ([
    {
        ExamenId: 1,
        examen: "Moca",
        resultados: "90/100",
        fecha: "22-08-2021",
        notas: "Sin notas",
    },
    {
        ExamenId: 2,
        examen: "Act. Basicas",
        resultados: "90/100",
        fecha: "22-08-2021",
        notas: "Sin notas",
    },
    {
        ExamenId: 3,
        examen: "Act. Instrumentales",
        resultados: "90/100",
        fecha: "22-08-2021",
        notas: "Sin notas",
    },
]);

const getEdad = (dateString) => {
    let hoy = new Date()
    let fechaNacimiento = new Date(dateString)
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear()
    let diferenciaMeses = hoy.getMonth() - fechaNacimiento.getMonth()
    if (
      diferenciaMeses < 0 ||
      (diferenciaMeses === 0 && hoy.getDate() < fechaNacimiento.getDate())
    ) {
      edad--
    }
    return edad
}

/*
    El paciente espera recibir los siguientes parametros 
    para rellenar su informacion en el perfil
    pacienteID: number,
    nombre: string,
    apellidoP: string,
    apellidoM: string,
    fechaNac: string,
    sexo: string,
    escolaridad: string,
    discapacidades: string,
    quejaMemoria: Boolean,
    hipoacusia_severa: Boolean,
    contactoEmergencia: number,
    imagenPerfil: string,
*/
const Patient =() =>{
    const { id } = useParams();
    const [datos, setData] = React.useState(null);
    React.useEffect(() => {
        fetch('/patient/'+id)
          .then((res) => res.json())
          .then((data) => setData(data.message));
    }, [id]);
    return(
        !datos ? <h1>Loading</h1>:
        <div className='Card'>
            <PatientInfo 
                image = {datos[0].imagenPerfil}
                name = {datos[0].nombre}
                age = {getEdad(datos[0].fechaNac)}
                sex = {datos[0].sexo}
            /> 
            <PatientRegistry
                emergencyC = {datos[0].contactoEmergencia}
                school = {datos[0].escolaridad}
                memory = {datos[0].quejaMemoria ? "Si" : "No"}
                difficulties = {datos[0].discapacidades}
                hipoacusia = {datos[0].hipoacusia_severa ? "Si" : "No"} 
            />
            <Details
                /*fecha1 = "22-09-2020"
                fecha2 = "22-03-2021"
                fecha3 = "22-09-2021"
                fecha4 = "22-03-2022"
                data1 = "28"
                data2 = "27"
                data3 = "27"
                data4 = "25"*/
                />
        </div>  
    )
}

const PatientInfo =(props) =>{
    return(
        <div className='CardInfo'>
            <div className='CardBody'>
                <img className='PatientImg' src={props.image} alt='PatientPP'/>
                <br></br><br></br>
                <h1 className='PatientName'>{props.name}</h1>
                <br></br>
                <h2 className='PatientAge'>Edad: {props.age}</h2>
                <br></br>
                <h2 className='PatientSex'>Sexo: {props.sex}</h2>
                <br></br><br></br>
            </div>
        </div>
    )
}

  return (
    <div className="CardDetails">
      <div className="TestGraph">
        <TestGraph />
      </div>
      <div className="Botones">
        <TestButton
          type="button"
          buttonStyle="btn--secondary--solid"
          buttonSize="btn--large"
          link={HomeLink}
        >
          MOCA
        </TestButton>
        <br></br>
        <br></br>
        <TestButton
          type="button"
          buttonStyle="btn--primary--solid"
          buttonSize="btn--large"
          link={HomeLink}
        >
          Act. Basicas
        </TestButton>
        <br></br>
        <br></br>
        <TestButton
          type="button"
          buttonStyle="btn--primary--solid"
          buttonSize="btn--large"
          link={HomeLink}
        >
          Act.Instrumentales
        </TestButton>
      </div>
      <hr className="Line1"></hr>
      <div className="central-table-view-patient">
        {
          <table className="styled-table-patient">
            <thead>
              <tr>
                <th></th>
                <th>Examenes</th>
                <th>Resultados</th>
                <th>Fecha</th>
                <th>Notas</th>
              </tr>
            </thead>
            <tbody>
              { datos ? datos.map((currentTest) => {
                return (
                  <ListCardTest
                    testObj={currentTest}
                    key={currentTest.tamizajeID}
                    examen={currentTest.tipo}
                    puntos={currentTest.puntos}
                    fecha={currentTest.fecha}
                    notas={currentTest.notas}
                    respuestasJSON = {JSON.parse(currentTest.respuestasJSON)}
                    />
                    );
                  }) : <h1>Faltan datos</h1>}
            </tbody>
          </table>
        }
      </div>
      <hr className="Line2"></hr>
    </div>
  );
};

const Patient = () => {
  return (
    <div className="Card">
      <PatientInfo
        image={OldMan}
        name="Adrian Becerra"
        age="89"
        sex="Masculino"
      />
      <PatientRegistry
        emergencyC="333-222-2200"
        school="Secundaria"
        memory="Si"
        difficulties="No"
        hipoacusia="No"
      />
      <Details 
      />
    </div>
  );
};

const PatientInfo = (props) => {
  return (
    <div className="CardInfo">
      <div className="CardBody">
        <img className="PatientImg" src={props.image} alt="PatientPP" />
        <br></br>
        <br></br>
        <h1 className="PatientName">{props.name}</h1>
        <br></br>
        <h2 className="PatientAge">Edad: {props.age}</h2>
        <br></br>
        <h2 className="PatientSex">Sexo: {props.sex}</h2>
        <br></br>
        <br></br>
      </div>
    </div>
  );
};

const PatientRegistry = (props) => {
  return (
    <div className="CardRegistry">
      <div className="CardBody">
        <br></br>
        <h2 className="PatientRegistryT">Contacto de emergencia:</h2>
        <p className="PatientRegistryA">{props.emergencyC}</p>
        <br></br>
        <h2 className="PatientRegistryT">Escolaridad:</h2>
        <p className="PatientRegistryA">{props.school}</p>
        <br></br>
        <h2 className="PatientRegistryT">Queja de memoria:</h2>
        <p className="PatientRegistryA">{props.memory}</p>
        <br></br>
        <h2 className="PatientRegistryT">Discapacidades:</h2>
        <p className="PatientRegistryA">{props.difficulties}</p>
        <br></br>
        <h2 className="PatientRegistryT">Hipoacusia severa:</h2>
        <p className="PatientRegistryA">{props.hipoacusia}</p>
        <br></br>
      </div>
    </div>
  );
};

export default Patient;
