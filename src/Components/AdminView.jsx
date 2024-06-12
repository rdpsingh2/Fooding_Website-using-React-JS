import axios from "axios";
import { useEffect, useState } from 'react';
import '../Styles/AdminView.css'
import StarIcon from '@mui/icons-material/Star';

const AdminView = () => {
    let [data, setdata] = useState([])
let [force,setforce]=useState(true);
useEffect(()=>{
    axios.get('http://localhost:1000/Products')
    .then((res)=>{
        console.log(res.data);
        setdata(res.data)
    })
   .catch((err)=>{
    console.log(err);
   })
},[force])
    useEffect(() => {
        axios.get('http://localhost:1000/Products')
            .then((res => {
                setdata(res.data);

            }))
                .catch((err) => {
                    console.log(err);
                })
}, [])
console.log(data);

let removeDish=(id,Dishname)=>{
    axios.delete(`http://localhost:1000/Products/${id}`)
    .then((res)=>{
        alert(Dishname+"Removed Successfully")
        setforce(!force)
    })
    .catch((err)=>{
        alert("Data Not Found")
    })
}

    return (
        <div className="adminviewpage">
            {data.map((x) => {
                return (
                    <div class="displayproducts">
                        <img src={x.thumbnailURL} alt="" />
                        <div class="restaurant">                       
                        <h4>{x.RestaurantName} ||</h4>
                        <b>{x.Ratings}<StarIcon id="star"/></b>
                        </div>
                        <h5 class="">{x.Dishname}</h5>
                        <p>₹{x.Price}.00</p>
                        <br/>
                        <button>Edit</button>
                        <button onClick={()=>{removeDish(x.id,x.Dishname)}}>Delete</button>
                    </div>
                )
            })}
        </div>
    );
}
export default AdminView;