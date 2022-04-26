import React from 'react'

const BubbleCard = (props, {currentPatient}) => {
    return (
        <div className="card-box">
            <div className="member-card">
                <div className="thumb-lg">
                    <img
                        src={props.img}
                        className="img-thumbnail"
                        alt="pp"
                    />
                </div>
            </div>
            <h2>{props.name} {props.patientObj.apellidoP}</h2>
        </div>
    );
  };
  
  export default BubbleCard;

