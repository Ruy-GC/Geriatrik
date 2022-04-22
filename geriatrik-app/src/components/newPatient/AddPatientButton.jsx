import { useNavigate  } from "react-router-dom"

const AddPatientButton = () => {
    const navigate = useNavigate ();
    return(
        <button className='addPatientButton' onClick={() => navigate('/home')}>.</button>
    )
    //Implementar un modal y hacerlo sobre home

}
export default AddPatientButton

