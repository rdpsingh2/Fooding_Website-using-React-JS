import { useState } from 'react';
import '../Styles/AddProducts.css'
import axios from 'axios';
const AddProduct = () => {
    let[count,setcount]=useState(0)
    let [Category,setcategory]=useState("")
    let[RestaurantName,setrestaurantName]=useState("")
    let[Dishname,setdishname]=useState("")
    let[Price,Setprice]=useState("")
    let[Quantity,setquantity]=useState("")
    let[Description,setdescription]=useState("")
    let[Ratings,setratings]=useState("")
    let[thumbnailURL,setthumbnailurl]=useState("")

    let data={Category,Dishname,Price,Quantity,Description,Ratings,thumbnailURL,RestaurantName}
    let addDish=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:1000/Products',data)
        .then((res)=>{
            console.log(res);
            alert("Dish Added Successfully")
            setcount(count++)
            
        })
        .catch((err)=>{
            console.log(err);
            alert("Error adding dish")
        })
    }
    
    return ( 
        <div className="additem">
            <form onSubmit={addDish}>
                <h1>ADD PRODUCT</h1>
                <label>
                    Category:<select value={Category} onChange={(e)=>{ setcategory(e.target.value) }} >
                        <option>Starters</option>
                        <option>Veg</option>
                        <option>Non Veg</option>
                        <option>Desserts</option>
                        <option>Breads</option> 
                        <option>Chinese</option>
                    </select>
                </label>
                <br/>
                <label>

                Restaurant Name:
                <input required value={RestaurantName} onChange={(e)=>{setrestaurantName(e.target.value)}} type="text" name="name" placeholder="Enter Restaurant Name"/>
                </label>
                <br/>
                <label>
                    Dishname:
                    <input  required value={Dishname} onChange={(e)=>{setdishname(e.target.value)}} type="text" name="name" placeholder="Enter your dish"/>

                </label>
                <br/>
                <label>
                    price:
                    <input required value={Price} onChange={(e)=>{Setprice(e.target.value)}} type="name" placeholder="Enter your number"></input>
                </label>
                <br/>
                <label>
                    Quantity:
                    <input required value={Quantity} onChange={(e)=>{setquantity(e.target.value)}} type="text" name="text" placeholder="Enter your Quantity"></input>
                </label>
                <br/>
                <label>
                    Description:
                    <input  required value={Description} onChange={(e)=>{setdescription(e.target.value)}} type="text" name="text" cols="30" placeholder="Enter your Description" />
                </label>
                <br/>
                <label>
                Ratings:
                <input required value={Ratings} onChange={(e)=>{setratings(e.target.value)}} type="number" name='text' placeholder='Enter your Ratings' />
                </label>
                <br/>
                <label>
                    thumbnailURL:
                    <input required value={thumbnailURL} onChange={(e)=>{setthumbnailurl(e.target.value)}} type="text" placeholder='Enter your Thumbnail'/>
                </label>
                <label>
                    <button type='submit'>ADD Dish</button>
                </label>
            </form>
        </div>
     );
}
 
export default AddProduct;