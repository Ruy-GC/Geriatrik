import './Moca.css';

import Unity, {UnityContext} from 'react-unity-webgl';
import { Fragment, useEffect, useState } from 'react';
import { Navigate } from "react-router-dom";

const unityContext = new UnityContext({
  productName: "Geriatrik",
  companyName: "TEC",
  loaderUrl: "unitybuild/2020.1/testBuild.loader.js",
  dataUrl: "unitybuild/2020.1/testBuild.data",
  frameworkUrl: "unitybuild/2020.1/testBuild.framework.js",
  codeUrl: "unitybuild/2020.1/testBuild.wasm",
  streamingAssetsUrl: "unitybuild/2020.1/streamingassets",
  webglContextAttributes:{
    preserveDrawingBuffer: true,
  }
}); 

function Moca() {
  const [isUnityMounted, setIsUnityMounted] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [progression, setProgression] = useState(0);
  const [mocaResults, setMocaResults] = useState("");
  const [redirect, setRedirect] = useState(false);

  useEffect(function(){
    unityContext.on("progress", handleOnUnityProgress);
    unityContext.on("loaded", handleOnUnityLoaded);
    unityContext.on("MocaFinished", handleMocaFinish);

    return function(){
      unityContext.removeAllEventListeners();
    };
  }, []);

  function handleOnUnityProgress(progression) {
    setProgression(progression);
  }

  function handleOnUnityLoaded() {
    setIsLoaded(true);
  }

  function handleMocaFinish(results){
    setMocaResults(results);
    console.log(results);
    setRedirect(true);
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
    return <Navigate to="/patientCard" replace={true}/>
  }

  return(
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
  );
}

export default Moca;
