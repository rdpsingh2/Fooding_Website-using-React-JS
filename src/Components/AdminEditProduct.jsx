import { useState } from "react";
import "../Style/EditProduct.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
const AdminEditProduct = () => {
    let [count,setcount] = useState(0)
    let[categroy,setcatagory]=useState("");
    console.log(catagroy);
    let[Restaurent,setrestaurent]=useState("");
    let[name,setname]=useState("");
    let[price,setprice]=useState("");
    let[description,setdesicription]=useState("");
    let[quantity,setquantity]=useState("");
    let[thumbnailurl,setthumbnailurl]=useState("");
    let[rating,setrating]=useState("");
    let admin = { catagroy, Restaurent, name, price, description,quantity,thumbnailurl,rating};


    let param = useParams();
    console.log(param.id);
    useEffect(()=>{
        axios.get(`http://localhost:1000/AddProduct/${param.id}`)
        .then((res)=>{
            console.log(res.data);
            setrestaurent(res.data.Restaurent);
            setname(res.data.name);
            setprice(res.data.price);
            setdesicription(res.data.description);
            setquantity(res.data.quantity);
            setthumbnailurl(res.data.thumbnailurl);
            setrating(res.data.rating);
        })
        .catch((rej)=>{
            console.log(rej);
        })
    },[])
let navigate = useNavigate();
let editProduct=(e)=>{
    e.preventDefault();
    axios.put(`http://localhost:1000/AddProduct/${param.id}`,admin)
    .then((res)=>{
        alert("Data has been updated");
        navigate("/adminhomepage/adminview")
    })
    .catch((rej)=>{
        alert("Error in updating");
    })
}

    return ( 
        <div className="EditProduct">
            <form onSubmit={editProduct}>
                <h1>Edit Page</h1>
                <br/>
                <label>
                    Catagory:<select value={catagroy} onChange={(e)=>{setcatagory(e.target.value)}}>
                        <option>Starter</option>
                        <option>Veg</option>
                        <option>Non-Veg</option>
                        <option>Dessart</option>
                        <option>Beverages</option>
                        <option>Bread</option>
                        <option>Chinese</option>
                    </select>
                </label>
                <br/>
            <label>
                Restaurent Name: <input type="text" value={Restaurent} onChange={(e)=>{setrestaurent(e.target.value)}} placeholder="Enter the Restaurent Name"/>
            </label>
            <br/>
            <label>
                Dish Name:<input type="text" value={name} onChange={(e)=>{setname(e.target.value)}} placeholder="Enter the Dish Name"/>
            </label>
            <br/>
            <label>
                Price:<input type="text" value={price} onChange={(e)=>{setprice(e.target.value)}} placeholder="Enter the cost price"/>
            </label>
            <br/>
            <label>
                Quantity:<input type="number" value={quantity} onChange={(e)=>{setquantity(e.target.value)}}/>
            </label>
            <br/>
            <label>
                Description:<textarea cols="30" value={description} onChange={(e)=>{setdesicription(e.target.value)}} placeholder="Enter the special recipies" rows="2"/>
            </label>
            <br/>
            <label>
                ThumbnailUrl :<input type="text" value={thumbnailurl} onChange={(e)=>{setthumbnailurl(e.target.value)}} placeholder="Enter the image url"/>
            </label>
            <br/>
            <label>
                Rating:<input type="number" value={rating} onChange={(e)=>{setrating(e.target.value)}}/>
            </label>
            <br/>
            <button>Add Dish</button>
            </form>
        </div>
     );
}
 
export default AdminEditProduct;