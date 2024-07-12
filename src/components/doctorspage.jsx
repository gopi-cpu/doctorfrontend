import doctordetails from "./doctordetails"
import { useNavigate } from "react-router-dom"
const Doctorpage=()=>{
    const navigate = useNavigate();
    const handlebooking = (data) =>{
        navigate('/doctor',{state:{doctor:data}});
        console.log(data)
    }

    return(
 <div style={{color:"white"}}>
    <div>
   <h1>Doctors</h1>
   <div style={{display:"grid",gridTemplateColumns:"350px 350px 400px 400px",marginLeft:"50px"}}>
    {
        doctordetails.map((data,index) =>
         <div style={{marginTop:"50px"}} index={data.id}>
       
       <div >
        <img src={data.img} style={{height:"250px",width:"250px",borderRadius:"50%"}} />
       </div>
            <div style={{marginLeft:"40px"}}><h2>Dr.{data.name}  <span>{data.education}</span></h2></div>
            {/* <div style={{marginLeft:"40px"}}>{data.discription}</div> */}
            <div style={{marginLeft:"50px"}}><h5>specialist {data.specialist}</h5></div>
           <button style={{marginLeft:"40px",backgroundColor:"blue",color:"white",borderRadius:"10px",height:"50px",width:"180px"}} onClick={()=>handlebooking(data)}>Book an appoinment</button>
            </div>

        )
    }
   </div>
    </div>
 </div>
)   }
export default Doctorpage