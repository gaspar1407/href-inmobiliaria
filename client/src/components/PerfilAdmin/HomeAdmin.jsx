import React from "react";
import { Link } from "react-router-dom";
import NavbarAdmin from "./NavAdmin";
import './estilos/HomeAdmin.css'


function HomeAdmin() {
    return (
     <div>
         <NavbarAdmin></NavbarAdmin>
         <div style={{width: '100%'}}>
         <img style={{width: '100%', maxHeight:'500px'}} src='https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'></img>
         </div>
         <div style={{width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: "center"}}>
         <div style={{display: 'flex', flexDirection: 'column', width: '600px', justifyContent: 'flex-start'}}>
         <h3 style={{color: 'rgba(17, 77, 77, 1)', marginTop: '30px'}}>AGREGAR</h3>
         <Link to='/admin/addHRent'>
         <button className='btn-admin' style={{border: 'none', width: '600px', padding: '7px 0', color: 'rgba(84, 84, 84, 1)', marginBottom: '10px', fontSize: '20px'}}>PROPIEDAD EN ALQUILER</button>
         </Link>
         <Link to=''>
         <button className='btn-admin' style={{border: 'none', width: '600px', padding: '7px 0', color: 'rgba(84, 84, 84, 1)', marginBottom: '40px', fontSize: '20px'}}>PROPIEDAD EN VENTA</button>
         </Link>
         </div>
         <div style={{display: 'flex', flexDirection: 'column', width: '600px', justifyContent: 'flex-start'}}>
         <h3 style={{color: 'rgba(17, 77, 77, 1)'}}>MODIFICAR</h3>
         <Link to=''>
         <button className='btn-admin' style={{border: 'none', width: '600px', padding: '7px 0', color: 'rgba(84, 84, 84, 1)', marginBottom: '10px', fontSize: '20px'}}>PROPIEDAD EN ALQUILER</button>
         </Link>
         <Link to=''>
         <button className='btn-admin' style={{border: 'none', width: '600px', padding: '7px 0', color: 'rgba(84, 84, 84, 1)', marginBottom: '40px', fontSize: '20px'}}>PROPIEDAD EN VENTA</button>
         </Link>
         </div>
         </div>
     </div>
    );
  }
  
  export default HomeAdmin;
  