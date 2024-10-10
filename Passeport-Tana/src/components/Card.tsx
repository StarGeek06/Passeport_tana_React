import React from "react";
import '../App.css'
import logoImage from '../images/WhatsApp Image 2024-10-09 at 17.00.40.jpeg'
function Card({image, nom, prenom, age, birthday, expire})
{
   return (
     <>
        <div className="container">
            <div className="card">

               

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
                        
                        <p>{age}</p>
                        <p>{birthday}</p>
                        <p>{expire}</p>
                    </div>
                </div>

                </div>


            </div>
        </div>
     </>
   )
}

export default Card;