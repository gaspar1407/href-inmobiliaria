import React, {useState} from "react";
import { Link } from "react-router-dom";
import './estilos/AddHouseOfRent.css'

export default function AddHouseOfRent() {
    const [price, setPrice] = useState('')
    const [expences, setExpences] = useState('')
    const [meter, setMeter] = useState('')
    const [garage, setGarage] = useState('')
    const [bedroom, setBedroom] = useState('')
    const [bathroom, setBathroom] = useState('')



    let handleInputChange = (e) => {
        if(e.target.name === 'price'){
            setPrice(e.target.value)
        } else if(e.target.name === 'expences'){
            setExpences(e.target.value)
        } else if(e.target.name === 'meter'){
            setMeter(e.target.value)
        } else if(e.target.name === 'garage'){
            setGarage(e.target.value)
        } else if(e.target.name === 'bedroom'){
            setBedroom(e.target.value)
        } else if(e.target.name === 'bathroom'){
            setBathroom(e.target.value)
        } 
    }
    console.log(price, expences)
  return (
    <div>
        <div className="div-sup">
            <div className="price-div">
            <h4>PRECIO ALQUILER</h4>
            <h5>$</h5><input type="text" name="price" onChange={(e) => handleInputChange(e)} />
            <h5>POR MES</h5>
            <h5>+$</h5><input type="text" name="expences" onChange={(e) => handleInputChange(e)} />
            </div>
            <div className="inputs-icon">
             <div className="sub-div">
            <img className='icon' src='https://cdn-icons-png.flaticon.com/512/72/72674.png'></img>
            <div style={{display: 'flex', flexDirection: 'rowç'}}><input type="text" name="meter" onChange={(e) => handleInputChange(e)} /> <h5>m2</h5></div>
            </div>
            <div className="sub-div">
            <img className='icon' src='https://static.thenounproject.com/png/3539103-200.png'></img>
            <input type="text" name="garage" onChange={(e) => handleInputChange(e)} />
            </div>
            <div className="sub-div">
            <img className='icon' src='https://cdn-icons-png.flaticon.com/512/2237/2237426.png'></img>
            <input type="text" name="bedroom" onChange={(e) => handleInputChange(e)} />
            </div>
            <div className="sub-div">
            <img className='icon' src='https://cdn-icons-png.flaticon.com/512/2850/2850294.png'></img>
            <input type="text" name="bathroom" onChange={(e) => handleInputChange(e)} />
            </div>
            </div>
        </div>
    </div>
  );
}
