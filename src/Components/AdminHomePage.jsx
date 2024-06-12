import AdminNavbar from "./AdminNavbar";
import {Routes,Route}  from "react-router-dom"
import AdminView from "./AdminView";
import AddProduct from "./AddProduct";
import AdminEditProduct from "./AdminEditProduct";
// import "../Style/adminhomepage.css" ;

const AdminHomePage = () => {
    return ( 
        <div>
            <AdminNavbar/>
            <Routes>
                <Route path="/adminview" element={<AdminView/>}/>
                <Route path="/adminaddproduct" element={<AddProduct/>}/>
                <Route path="/admineditproduct" element={<AdminEditProduct/>}/>
                <Route path="/admineditproduct/:id" element={<AdminEditProduct/>}/>
            </Routes>
            {/* <h1>AdminHomePage</h1> */}
        </div>
     );
}
 
export default AdminHomePage;