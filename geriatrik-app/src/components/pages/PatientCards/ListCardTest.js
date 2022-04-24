import React from 'react'

const ListCardTest = (props) => {
  return (
    <tr className='list-item-patient'>
        <td>
        </td>
        <td>{props.testObj.examen}</td>
        <td>{props.testObj.resultados}</td>
        <td>{props.testObj.fecha}</td>
        <td>{props.testObj.notas}</td>
    </tr>
  )
}

export default ListCardTest
