import React from 'react'
import Navbar from '../Navbar'
import TestButton from '../TestButton'
import "./styles.css"

const HomeLink = "/"

const Reports = () => {
  return (
    <div>
<Navbar />

  <TestButton onClick={() => {console.log("You Clicked on Me!")}}
  type="button"
  buttonStyle="btn--secondary--solid"
  buttonSize="btn--large"
  link = { HomeLink }
  >MOCA</TestButton>

<TestButton onClick={() => {console.log("You Clicked on Me!")}}
  type="button"
  buttonStyle="btn--primary--solid"
  buttonSize="btn--large"
  link = { HomeLink }
  >Actividades Instrumentales</TestButton>

<TestButton onClick={() => {console.log("You Clicked on Me!")}}
  type="button"
  buttonStyle="btn--primary--solid"
  buttonSize="btn--large"
  link = { HomeLink }
  >Actividades Basicas</TestButton>
  

</div>
  )
}

export default Reports