import { useState } from 'react';
import './Card.css'


// function Card(){    
//     const title = "Tucano";
//     const imgURL = "https://images.unsplash.com/photo-1618191702724-1e413e177fde?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//     const description = "Questo è un Tucano"
//     return(
//         <div className="card">
//             <div className="card-image">
//                 <img src={imgURL} alt="" />
//             </div>
//             <div>
//                 <h2>{title}</h2>
//                 <p>{description}</p>
//             </div>
//         </div>
//     )
// }


//ATT: in questo modo io definisco delle props le quali verranno valorizzate nel component Parent. Il dato esiste nel parent
// function Card(props){
//     const title = props.title;
//     const description = props.description;
//     const imgURL = props.imgURL;
    
//     return(
//         <div className="card">
//              <div className="card-image">
//                  <img src={imgURL} alt="" />
//              </div>
//              <div>
//                  <h2>{title}</h2>
//                  <p>{description}</p>
//              </div>
//          </div>
//     )
// }

//in questa "versione" non passo un parametro chiamato props ma passo direttamente un oggetto
// function Card({title, description, imgURL}){
//     return(
//            <div className="card">
//               <div className="card-image">
//                   <img src={imgURL} alt="" />
//               </div>
//               <div>
//                   <h2>{title}</h2>
//                   <p>{description}</p>
//               </div>
//           </div>
//     )
// }


//in questa versione utilizzerà una parola chiave: "children" per poter raccogliere ciò che scrivo a mano nel parent all'interno del selettore child. Quindi children non è una semplice prop, bensì diventa parola chiave

function Card({title, description, imgURL,  isSpotted: isSpottedValue, onToggleSpotted, children}){

    const [isSpotted, setSpotted] = useState(isSpottedValue);
    
    const handleSpotted = () =>{
        setSpotted(!isSpotted);
        onToggleSpotted();
    }

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
                {/* <button onClick={() => setSpotted( isSpotted => {!isSpotted})}>
                    Avvistato/NO
                </button> */}
                {/* <button onClick={onToggleSpotted}>Avvistato davvero? </button> */}
                
                <button onClick={handleSpotted}>Avvistato / no</button>
              </div>
          </div>
    )
}

export default Card;