import React from 'react'

const ListCard = (props) => {
  return (
    <tr className='list-item'>
        <td>
            <div className="thumb-lg2">
                <img
                src={props.img}
                className="img-thumbnail"
                alt="pp"
                />
            </div>
        </td>
        <td>{props.patientObj.nombre}</td>
        <td>{props.patientObj.apellidoP}</td>
        <td>{props.patientObj.apellidoM}</td>
        <td>{props.patientObj.fechaNac}</td>
        <td>{props.patientObj.sexo}</td>
        <td>{props.patientObj.escolaridad}</td>
        <td>{props.patientObj.discapacidades}</td>
        <td>{props.patientObj.quejaMemoria ? "Si" : "No"}</td>
        <td>{props.patientObj.hipoacusia_severa ? "Si" : "No"}</td>
        <td>{props.patientObj.contactoEmergencia}</td>
    </tr>
  )
}

export default ListCard
