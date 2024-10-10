import React from "react";
import '../App.css'
import logoImage from '../images/WhatsApp Image 2024-10-09 at 17.00.40.jpeg'
import scanImage from '../images/WhatsApp_Image_2024-10-10_at_04.17.58-removebg-preview.png'
import signImage from '../images/WhatsApp_Image_2024-10-10_at_04.51.42-removebg-preview.png'
function Card({image, nom, prenom, age, birthday, expire})
{
   return (
     <>
        <div className="container">
            <div className="card">

            <h3>CARTE D'IDENTITE TANALAND</h3>

                <div className="logo">
                   <img src={logoImage} alt="" />
                </div>


                <div className="idts">


                <div className="profil">
                  <img src={image} alt="" />
                </div>

                <div className="ids">
                   
                    <div className="np">
                        <p>{nom} {prenom} </p>
                        
                    </div>

                    <div className="ids-group">
                        
                        <p>
                           <strong>Age</strong>  <br />
                            {age}
                        </p>
                        <p>
                            <strong>Birthday</strong> <br />
                            {birthday}
                        </p>
                        <p>
                             <strong>Expiration</strong> <br />
                            {expire}
                        </p>
                    </div>
                </div>

                <div className="scan">
                    <img src={scanImage} alt="" />
                </div>

                <div className="sign">
                    <img src={signImage} alt="" />
                </div>

                </div>


            </div>
        </div>
     </>
   )
}

export default Card;