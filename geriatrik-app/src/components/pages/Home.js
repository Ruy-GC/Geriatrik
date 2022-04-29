import React, {useState} from 'react'
import Navbar from '../Navbar'
import BubbleCard from '../visual/BubbleCard'
import ListCard from '../visual/ListCard'
import viewlist_filled from '../../images/viewlist_filled.png'
import viewlist_unfilled from '../../images/viewlist_unfilled.png'
import dataset_filled from '../../images/dataset_filled.png'
import dataset_unfilled from '../../images/dataset_unfilled.png'
import { useNavigate  } from "react-router-dom"
import { IconBase } from 'react-icons'
import SearchBar from "../searchBar/searchBar";

const Home = () => {
  const navigate = useNavigate ();

  const loadPatients = () => {
    fetch("/patients").then((res) => res.json()).then((data) => setData(data.message));
  }
  const [datos, setData] = React.useState(null);
  React.useEffect(() => {
    fetch("/patients")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  const OpenPatientCard = (currentPatient) => {
    //allow to naviigate through the routes
    navigate('/PatientCard/'+ currentPatient.pacienteID)
  }
  const filterPosts = (posts, query) => {
    if (!query) {
        return posts;
    }

    return posts.filter((post) => {
        const postName = post.nombre.toLowerCase();
        return postName.includes(query);
    });
  };
  
  const { search } = window.location;
  const query = new URLSearchParams(search).get('s');
  const [searchQuery, setSearchQuery] = useState(query || '');
  const filteredPosts = filterPosts(datos, searchQuery);
  
  

  const [tipoVista, setVista] = useState("Grid");
  //loadPatients(); En caso de que quieran drenar la memoria activenlo, pero se activa un listener para nuevos datos
  // Es decir que nunca mas necesitaria refrescar

  var view;
  var buttonDataset;
  var buttonList;
  var centeredHomeWidth;

  if (tipoVista==="Grid") {
    view =  
          <div className='view-wrapper'>
            
            <div className='central-bubble-view'>
              {!datos ? "loading..." : 
              filteredPosts.map((currentPatient) => {
                return(
                  <div onClick={() => OpenPatientCard(currentPatient)} style={{cursor: 'pointer'}}>
                    <BubbleCard
                      patientObj={currentPatient}
                      key={currentPatient.pacienteID}
                      name={currentPatient.nombre}
                      img={currentPatient.imagenPerfil}
                      role={currentPatient.escolaridad}
                    />
                  </div>
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
              {
                !datos ? "loading...": 
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
                  {
                  filteredPosts.map((currentPatient) => {
                    return(
                      <tr className='list-item' onClick={() => OpenPatientCard(currentPatient)} style={{cursor: 'pointer'}}>
                        <ListCard
                          patientObj={currentPatient}
                          key={currentPatient.pacienteID}
                          name={currentPatient.nombre}
                          img={currentPatient.imagenPerfil}
                          role={currentPatient.escolaridad}
                        />
                      </tr>
                    );
                  })} 
                </tbody>
              </table>
              }
            </div>
          </div> 
    buttonDataset = <button className='home-buttons'><img  src={dataset_unfilled} className='home-buttons'alt="sdas"onClick={() => setVista("Grid")} /></button>
    buttonList = <button className='home-buttons'><img src={viewlist_filled} className='home-buttons' alt="sdas"onClick={() => setVista("Tabla")} /></button>
    centeredHomeWidth="80%"          
  }
  return (
    <div style={{width: centeredHomeWidth}} className='centered-home'>
      <h1>Bienvenid@ de nuevo, {localStorage.getItem('name')}</h1>
      <Navbar />
      <div className='home-bar'>
        <div className='search'>
        <SearchBar 
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
        </div>
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