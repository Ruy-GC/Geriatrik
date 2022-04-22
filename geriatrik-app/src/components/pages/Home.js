import React, {useState} from 'react'
import Navbar from '../Navbar'
import BubbleCard from '../visual/BubbleCard'
import ListCard from '../visual/ListCard'
import viewlist_filled from '../../images/viewlist_filled.png'
import viewlist_unfilled from '../../images/viewlist_unfilled.png'
import dataset_filled from '../../images/dataset_filled.png'
import dataset_unfilled from '../../images/dataset_unfilled.png'

const Home = () => {
  const [tipoVista, setVista] = useState("Grid");
  const [patients, setPatients] = useState([
    {
      pacienteID: 1,
      nombre: "Carlo Angel",
      apellidoP: "Lujan",
      apellidoM: "Garcia",
      fechaNac: "29/05/2001",
      sexo: "H",
      escolaridad: "Licenciatura",
      discapacidades: "Sin registros",
      quejaMemoria: false,
      hipoacusia_severa: false,
      contactoEmergencia: 3322512297,
      imagenPerfil: "https://pbs.twimg.com/profile_images/1098106430647762944/N-Fx6SOu_400x400.png",
    },
    {
      pacienteID: 2,
      nombre: "Adrian",
      apellidoP: "Becerra",
      apellidoM: "Meza",
      fechaNac: "28-06-2002",
      sexo: "H",
      escolaridad: "Licenciatura",
      discapacidades: "Sin registros",
      quejaMemoria: true,
      hipoacusia_severa: false,
      contactoEmergencia: 3322512267,
      imagenPerfil: "https://pbs.twimg.com/profile_images/1217213036018262017/i2fi91Xd_400x400.jpg"
    },
    {
      pacienteID: 3,
      nombre: "Rauw",
      apellidoP: "Alejandro",
      apellidoM: "Debuentura",
      fechaNac: "26-05-1993",
      sexo: "H",
      escolaridad: "Kinder",
      discapacidades: "Me gusta todo de ti",
      quejaMemoria: true,
      hipoacusia_severa: true,
      contactoEmergencia: 3322456797,
      imagenPerfil: "https://i1.sndcdn.com/artworks-LXajbAY7hzS9R4y6-ijW2Hg-t500x500.jpg",
    },
    {
      pacienteID: 4,
      nombre: "Dolores",
      apellidoP: "Leal",
      apellidoM: "Buenfil",
      fechaNac: "16/01/1930",
      sexo: "M",
      escolaridad: "Licenciatura",
      discapacidades: "Silla de ruedas",
      quejaMemoria: true,
      hipoacusia_severa: true,
      contactoEmergencia: 3311222297,
      imagenPerfil: "https://i.pinimg.com/474x/06/28/60/0628609683c9242c15b227ac5fcaa193.jpg",
    },
    {
      pacienteID: 5,
      nombre: "Marta",
      apellidoP: "Sasueta",
      apellidoM: "de Cosio",
      fechaNac: "18/06/1900",
      sexo: "M",
      escolaridad: "Doctorado",
      discapacidades: "Sin registros",
      quejaMemoria: false,
      hipoacusia_severa: false,
      contactoEmergencia: 3350002356,
      imagenPerfil: "https://pbs.twimg.com/profile_images/1221944116080250880/tJN0Hbqy_400x400.jpg",
    },
    {
      pacienteID: 6,
      nombre: "Porfirio",
      apellidoP: "Lopez",
      apellidoM: "Juanetes",
      fechaNac: "18/04/1923",
      sexo: "H",
      escolaridad: "Doctorado",
      discapacidades: "Sin registros",
      quejaMemoria: false,
      hipoacusia_severa: false,
      contactoEmergencia: 3301020397,
      imagenPerfil: "https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_episode/2276977/2276977-1568299280612-d9c420dea5897.jpg",
    },
    {
      pacienteID: 7,
      nombre: "Florentino",
      apellidoP: "Guitierrez",
      apellidoM: "Peña",
      fechaNac: "09/02/1945",
      sexo: "H",
      escolaridad: "Licenciatura",
      discapacidades: "No ve bien",
      quejaMemoria: false,
      hipoacusia_severa: true,
      contactoEmergencia: 3304062297,
      imagenPerfil: "https://mp.reshift.nl/zoom/6951241E3D5C7CE44B39E81B43D74FBB-old-man.jpg?w=450",
    },
  ]);

  var view;
  var buttonDataset;
  var buttonList;
  var centeredHomeWidth;

  if (tipoVista==="Grid") {
    view =  
          <div className='view-wrapper'>
            <div className='central-bubble-view'>
              {patients.map((currentPatient) => {
                return(
                  <BubbleCard
                    patientObj={currentPatient}
                    key={currentPatient.pacienteID}
                    name={currentPatient.nombre}
                    img={currentPatient.imagenPerfil}
                    role={currentPatient.escolaridad}
                  />
                );
              })}
            </div>
          </div>
    buttonDataset = <button className='home-buttons'><img  src={dataset_filled} className='home-buttons'alt="sdas"onClick={() => setVista("Grid")} /></button>
    buttonList = <button className='home-buttons'><img src={viewlist_unfilled} className='home-buttons' alt="sdas"onClick={() => setVista("Tabla")} /></button>
    centeredHomeWidth="50%"
  } else {
    view = 
          <div className='view-wrapper'>
            <div className='central-table-view'>
              <table className="styled-table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Nombre</th>
                        <th>ApellidoP</th>
                        <th>ApellidoM</th>
                        <th>Fecha Nacimiento</th>
                        <th>Sexo</th>
                        <th>Escolaridad</th>
                        <th>Discapacidades</th>
                        <th>Queja memoria</th>
                        <th>Hipoacusia Severa</th>
                        <th>Contacto Emergencia</th>
                    </tr>
                </thead>
                <tbody>
                  {patients.map((currentPatient) => {
                    return(
                      <ListCard
                        patientObj={currentPatient}
                        key={currentPatient.pacienteID}
                        name={currentPatient.nombre}
                        img={currentPatient.imagenPerfil}
                        role={currentPatient.escolaridad}
                      />
                    );
                  })} 
                </tbody>
              </table>
            </div>
          </div> 
    buttonDataset = <button className='home-buttons'><img  src={dataset_unfilled} className='home-buttons'alt="sdas"onClick={() => setVista("Grid")} /></button>
    buttonList = <button className='home-buttons'><img src={viewlist_filled} className='home-buttons' alt="sdas"onClick={() => setVista("Tabla")} /></button>
    centeredHomeWidth="80%"          
  }
  return (
    <div style={{width: centeredHomeWidth}} className='centered-home'>
      <h1>Bienvenida de nuevo, Marcela</h1>
      <Navbar />
      <div className='home-bar'>
        <div className='home-view-buttons'>
          {buttonDataset}
          {buttonList}
        </div>
      </div>
      {view}
    </div>
  )
}

export default Home