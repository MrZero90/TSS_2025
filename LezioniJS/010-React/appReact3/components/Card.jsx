import { useState } from 'react';
import './Card.css'



function Card({title, description, imgURL,  isSpotted: isSpottedValue, children}){

    const [isSpotted, setSpotted] = useState(isSpottedValue);
    

    return(
     <div className= {`card ${isSpotted ? "bgGreen": "bgRed"}`}>
              <div className="card-image">
                  <img src={imgURL} alt="" />
              </div>
              <div>
                  <h2>{title}</h2>
                  <p>{description}</p>
                  <p>Commento: {children}</p>
              </div>

              <div>
                <span>{isSpotted ? "Avvistato": "Non avvistato"}</span>
              </div>

              <div>
                <button onClick={() => setSpotted( isSpotted => !isSpotted)}>
                    Avvistato/NO
                </button>
               
              </div>
          </div>
    )
}

export default Card;