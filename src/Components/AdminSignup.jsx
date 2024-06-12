import { useState } from "react"
import '../Styles/AdminSignup.css'
import axios from "axios"

const AdminSignup = () => {
    let [name, setName] = useState("")
    let [email, setemail] = useState("")
    let [password, setPassword] = useState("");
    let [phone, setphone] = useState("")
    let [profile, setprofile] = useState("")
    // console.log(name, email, password);
    let admins = { name, email, password, phone, profile }
    let addAdmin = (e) => {
         e.preventDefault()
         axios.post('http://localhost:1000/Manager',admins)
         .then((res)=>{
            alert("Admin added successfully")
         })
         .catch((err)=>{
            alert("Invalid Data")
         })
        // fetch("http://localhost:1000/Manager", {   
        //     method: "POST",
        //     headers: { "content-Type": "application/json" },
        //     body: JSON.stringify(admins)
        // })
        //     .then((res) => {
        //         console.log(res);
        //         alert("Admin added successfully")
        //     })
        //     .catch((err) => {
        //         alert("Invalid Data")
            // })
    }
    return (
        <div id="admin-signup">

            <form onSubmit={addAdmin}>
                <label>
                    Admin Name:
                    <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} placeholder="Enter your name" />
                </label>
                <br />
                <label>

                    Email:<input required type="email" value={email} onChange={(e) => { setemail(e.target.value) }} placeholder="Enter the Admin Email" />
                </label>
                <br />
                <label>
                    phone:<input required type="tel" pattern="[0-9]{10}" placeholder="Enter your phone number" value={phone} onChange={(e) => { setphone(e.target.value) }}></input>
                </label>
                <br />
                <label>
                    Password:<input required type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder="Enter a password" />
                </label>
                <br />
                <label>
                    Profileimageurl:
                    profile:<input required type="tel" value={profile} onChange={(e) => { setprofile(e.target.value) }} placeholder="Enter the image address" />
                </label>
                <br />
                <button>Submit</button>
            </form>

        </div>

    );
}

export default AdminSignup;

