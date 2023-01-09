import './Moca.css';

import Unity, {UnityContext} from 'react-unity-webgl';
import { Fragment, useEffect, useState } from 'react';
import { Navigate, useParams, useNavigate } from "react-router-dom";
import axios from 'axios';
import { useAlert } from 'react-alert'

const unityContext = new UnityContext({
  productName: "Geriatrik",
  companyName: "TEC",
  loaderUrl: "../../../unitybuild/2020.1/testBuild.loader.js",
  dataUrl: "../../../unitybuild/2020.1/testBuild.data",
  frameworkUrl: "../../../unitybuild/2020.1/testBuild.framework.js",
  codeUrl: "../../../unitybuild/2020.1/testBuild.wasm",
  streamingAssetsUrl: "../../../unitybuild/2020.1/streamingassets",
  webglContextAttributes:{
    preserveDrawingBuffer: true,
  }
}); 

function Moca() {
  const navigate = useNavigate ();
  const alert = useAlert();
  const [isUnityMounted, setIsUnityMounted] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [progression, setProgression] = useState(0);
  const [mocaResults, setMocaResults] = useState("");
  const [redirect, setRedirect] = useState(false);
  const {idEmpleado, idPaciente} = useParams();

  useEffect(function(){
    if(!localStorage.token){
      navigate('/');
    }else{
      unityContext.on("progress", handleOnUnityProgress);
      unityContext.on("loaded", handleOnUnityLoaded);
      unityContext.on("MocaFinished", handleMocaFinish);

      return function(){
        unityContext.removeAllEventListeners();
      };
    }
    
  }, []);

  function handleOnUnityProgress(progression) {
    setProgression(progression);
  }

  function handleOnUnityLoaded() {
    setIsLoaded(true);
  }

  function handleMocaFinish(results){
    setMocaResults(results);
    saveResults(results).then(() =>{setRedirect(true);});
  }

  async function saveResults(results){
    let mocaRes;

    try{
      mocaRes = JSON.parse(results);
    } catch(e){
      console.log("ERROR: \n" + results);
    }

    let respuesta = {};
    respuesta["empleadoId"] = idEmpleado;
    respuesta["pacienteId"] = idPaciente;
    respuesta["tipoTamizaje"] = 0;
    respuesta["fecha"] = new Date().toISOString().slice(0, 10);
    respuesta["puntos"] = mocaRes.resultados.total;
    respuesta["respuestasJSON"] = results.replace(/(\r\n|\n|\r)/gm, "");

    try {
      const config = {
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        }
    }
      const res = await axios.post('https://geriatrik-api.herokuapp.com/moca',JSON.stringify(respuesta),config);
      if(res){
        alert.success('Test saved');
      }
    } catch (error) {
      alert.error('Failed to save test');
    }

  }

  function handleOnClickUnMountUnity() {
    if (isLoaded === true) {
      setIsLoaded(false);
    }
    setIsUnityMounted(isUnityMounted === false);
  }

  function sendDataToUnityTest(){
    unityContext.send("SceneManager", "setPacienteID", 1);
    unityContext.send("SceneManager", "setEmpleadoID", 1);
  }

  if(redirect === true){
    return <Navigate to={"/patientCard/" + idPaciente} replace={true}/>
  }

  return(
    <div>
    <Fragment>
    <div className='wrapper'>
      {isUnityMounted === true && (
        <Fragment>
          <div className='unity-container'>
            {isLoaded === false && (
              <div className='loading-overlay'>
                <div className='progess-bar'>
                  <div
                    className='progress-bar-fill'
                    style={{width: progression * 100 + "%"}}
                  />
                </div>
              </div>
            )}
            <Unity className='unity-canvas' unityContext={unityContext} />
          </div>
        </Fragment>
      )}
    </div>
  </Fragment>
  </div>
  );
}

export default Moca;
