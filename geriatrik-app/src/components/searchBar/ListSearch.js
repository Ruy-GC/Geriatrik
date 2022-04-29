import { React, useState } from 'react'
import BubbleCard from '../visual/BubbleCard'


function ListSearch(props) {
    //create a new array by filtering the original array
    const filteredData = props.patients.filter((el) => {
        //if no input the return the original
        if (props.input === '') {
            return el;
        }
        //return the item which contains the user input
        else {
            return el.nombre.toLowerCase().includes(props.input)
        }
    })
    return (
        <ul>
            {filteredData.map((item) => (
                <div key={item.pacienteID}>
                <BubbleCard>
                    patientObj={item}
                    key={item.pacienteID}
                    
                    img={item.imagenPerfil}
                    role={item.escolaridad}
                </BubbleCard>

                </div>
                
            ))}
        </ul>
    )
}

export default ListSearch