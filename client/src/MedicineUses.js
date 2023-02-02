import React from "react";
import {FaCloudUploadAlt} from "react-icons/fa"


const MedicineUses=()=>
{
    return(
        <section className="MedicineUses">
            
            <h2 className="heading-1">Want To know About A Medicine ???</h2>
            <div className="medicine-content">
                <div className="steps">
                <ul>
                    <li>
                        <h3>Step 1</h3>
                         <h5>Click on the "Upload Image" Button</h5>
                    </li>
                    <li>
                        <h3>Step 2</h3>
                         <h5>Click a Photo of The medicne Pack</h5>
                    </li>
                    <li>
                        <h3>Step 3</h3>
                         <h5>Click on "Get Details"</h5>
                    </li>
                </ul>
            </div>
                <div >
                    <div className="oval oval-box" >
                    <img src={require("./med.jpg")} alt=""  className="oval-img"/>
                    <div>
        <button className="input-submit">
        <a href = "http://127.0.0.1:5000/upload" className="upload">upload</a>
        </button>
    </div>
                    </div> 
                    {/* <span className="upload-section">
                        <h3>Uplaod Image</h3>
                        <buttton className="upload-btn">FDSVFB</buttton>
                    </span> */}
                </div>   
                    
            </div>
        </section>
    )
}

export default MedicineUses