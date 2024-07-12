import { useLocation } from "react-router-dom"
const Doctorlistening =()=>{
    const location = useLocation()
    const {doctor} = location.state
    return(
        <div style={{color:"white"}}>
            Doctor details page
            <div style={{display:"grid",gridTemplateColumns:"50% 50%"}}>
            <div >
                <img src={doctor.img}  />
            </div>
            <div>
                <div><h1> Doctor name  :{doctor.name}</h1></div>
                <div> <h1>Education : {doctor.education}</h1> </div>
                <div><h1>{doctor.discription}</h1></div>
                <div><h1>{doctor.specialist}</h1></div>
                <div><h1>experience{doctor.experience}</h1></div>
                <div><h1>consultation fee{doctor.fee}</h1></div>
                <div><h1>Mobile number :{doctor.number}</h1></div>
                <div><h1>Languages :{doctor.languages} </h1></div>
                <button style={{backgroundColor:"red"}}>Confirm booking</button>
            </div>
            </div>
        </div>
    )
}

export default Doctorlistening


        // experience:2,
        // fee:200,
        // number:"8328111975",
        // languages:"telugu hindi"