import { useEffect, useState } from "react";
import { Link ,useNavigate} from "react-router-dom";
import AdminSignup from "./AdminSignup"
import "../Styles/AdminLogin.css"
import axios from "axios";
const AdminLogin = () => {
    let[uname,setuname]=useState("");
    console.log(uname);
    let [password,setpassword]=useState("");
    console.log(password);
    let[admin,setadmin]=useState([]);
    let navigate = new useNavigate();
    useEffect(()=>{
        axios.get('http://localhost:1000/Manager')
        .then((res)=>{
            console.log(res.data);
            setadmin(res.data)
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])
    function login(e) {
        let a=false;
        e.preventDefault();
        admin.map((x)=>{
            if(uname==x.email && password== x.password ){
                alert("Logged in successfully")
                navigate("/adminhomepage");
                
                a=true;

            }

        })
        if (a==false){
            alert("Invalid username or password")
        }
        
    }
    return ( 
        <div className="AdminLogin">
            <h1>Admin Login</h1>
            <form>
                <label>
                    UserName:<input type="text" value={uname} onChange={(e)=>{setuname(e.target.value)}} placeholder="Enter the name"/>
                </label>
                <br/>
                <label>
                    password:<input type="password" value={password} onChange={(e)=>{setpassword(e.target.value)}} placeholder="Enter the Password"/>
                </label>
                <br/>
                <button onClick={login}>Login</button>
                <p>Are you new to the page? <Link to="/adminsignup">Signup now</Link></p>
            </form>
        </div>
     );
}
 
export default AdminLogin;