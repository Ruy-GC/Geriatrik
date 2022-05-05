import React, { useEffect } from "react";
import { useState } from "react";
import OldMan from "../../layout/images/OldManPic.jpg";
import "./Patient.css";
import TestButton from "../../TestButton";
import TestGraph from "../../graph/TestGraph";
import { Bar } from "react-chartjs-2";
import ListCardTest from "./ListCardTest";
import { useParams } from "react-router-dom";
import BackButton from '../../BackButton'

const HomeLink = "/moca/";

const Details = (props) => {
  const { id } = useParams(); // pacienteId
  const [datos, setData] = React.useState(null);
  let valuesArray;

  React.useEffect(() => {
    fetch(`/tamizaje/${encodeURIComponent(props.patientID)}"`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);
  // console.log(datos);

  if (datos) {
    datos.map((currentTest) => {
      valuesArray = JSON.parse(currentTest.respuestasJSON);
      console.log(valuesArray);
    });
  }

  if (datos) {
    var graphDates = datos.map((currentGraph)  => {
      return (
        currentGraph.fecha
      );
    });
  }

  if (datos) {
    var graphResults = datos.map((currentGraph)  => {
      return (
        currentGraph.puntos
      );
    });
  }

  // if (valuesArray) {
  //   valuesArray.map((dato) => {
  //     console.log(dato)
  //   })
  // }

  function getMocaLink(){
    return `/moca/${1}/${id}`
  }
  //localStorage.getItem("id")

  return (
    <div className="CardDetails">
      <div className="TestGraph">
        <TestGraph
        dates = {graphDates} 
        data = {graphResults}
        />
      </div>
      <div className="Botones">
        <TestButton
          type="button"
          buttonStyle="btn--secondary--solid"
          buttonSize="btn--large"
          link={getMocaLink()}
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
                <th>Examen</th>
                <th>Resultados</th>
                <th>Fecha</th>
                <th>Notas</th>
              </tr>
            </thead>
            <tbody>
              {datos ? (
                datos.map((currentTest) => {
                  return (
                    <ListCardTest
                      testObj={currentTest}
                      key={currentTest.tamizajeID}
                      examen={currentTest.tipo}
                      puntos={currentTest.puntos}
                      fecha={currentTest.fecha}
                      notas={currentTest.notas}
                      respuestasJSON={JSON.parse(currentTest.respuestasJSON)}
                    />
                  );
                })
              ) : (
                <h1>Faltan datos</h1>
              )}
            </tbody>
          </table>
        }
      </div>
      <hr className="Line2"></hr>
        <div className='BackButton'>
            <BackButton 
            link = '/Home'></BackButton>
        </div>
    </div>
  );
};

const getEdad = (dateString) => {
  let hoy = new Date();
  let fechaNacimiento = new Date(dateString);
  let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
  let diferenciaMeses = hoy.getMonth() - fechaNacimiento.getMonth();
  if (
    diferenciaMeses < 0 ||
    (diferenciaMeses === 0 && hoy.getDate() < fechaNacimiento.getDate())
  ) {
    edad--;
  }
  return edad;
};

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
const Patient = () => {
  const { id } = useParams();
  const [datos, setData] = React.useState(null);
  React.useEffect(() => {
    fetch("/patient/" + id)
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, [id]);
  return !datos ? (
    <h1>Loading</h1>
  ) : (
    <div className="Card">
      <PatientInfo
        image={datos[0].imagenPerfil}
        name={datos[0].nombre}
        age={getEdad(datos[0].fechaNac)}
        sex={datos[0].sexo}
      />
      <PatientRegistry
        emergencyC={datos[0].contactoEmergencia}
        school={datos[0].escolaridad}
        memory={datos[0].quejaMemoria ? "Si" : "No"}
        difficulties={datos[0].discapacidades}
        hipoacusia={datos[0].hipoacusia_severa ? "Si" : "No"}
      />
      <Details patientID={id} />
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
