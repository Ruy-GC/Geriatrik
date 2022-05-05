import React, { useEffect } from "react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAlert } from "react-alert";
import "./Profile.css";

const Profile = () => {
  const { id } = useParams();
  const [datos, setData] = React.useState(null);
  const alert = useAlert();
  const navigate = useNavigate();
  const loadProfile = async () =>{
    try {
      const res = await axios.get("/profile/" + id);
      setData(res.data.message);
      console.log(datos);

      alert.success('Patient loaded');

    } catch (error) {
      alert.error('Error while fetching data');
    }
  }    
  useEffect(() => {
    if(!localStorage.token){
      navigate('/');
    }else{
      loadProfile();
    }
    /*fetch("/patient/" + id)
      .then((res) => res.json())
      .then((data) => setData(data.message));*/
  }, []);
  
  if(datos) {
      var name = datos[0].nombre + " " +datos[0].apellidoP + " " + datos[0].apellidoM; 
      var fechaNac = datos[0].fechaNac.slice(0, 10);
      var type;
      if(datos[0].tipoEmpleado == 1){
        type = "Doctor@";
      }else if(datos[0].tipoEmpleado == 2){
        type = "Enfermer@";
      }else{
        type = "Aplicador@";
      }
  }
  return !datos ? (
    <h1>Loading</h1>
  ) : (
      <UserInfo
        image={datos[0].imagenPerfil}
        name= {name}
        dob={fechaNac}
        sexo={datos[0].sexo}
        email = {datos[0].email}
        type = {type}
      />
  );
};


const UserInfo = (props) => {
  return (
    <div className="wrapper">
    {/* <div className="CardInfo"> */}
      <div className="CardBody">
        <img className="UserImg" src={props.image} alt="UserPP" />
        <br></br>
        <br></br>
        <h2 className="UserType">{props.type}</h2>
        <br></br>
        <h1 className="UserName">{props.name}</h1>
        <br></br>
        <h2 className="UserAge">Fecha de nacimiento: {props.dob}</h2>
        <br></br>
        <h2 className="UserSex">Sexo: {props.sexo}</h2>
        <br></br>
        <h2 className="UserContact">Contacto: {props.email} </h2>
        <br></br>
      </div>
    {/* </div> */}
    </div>
  );
};

export default Profile;
