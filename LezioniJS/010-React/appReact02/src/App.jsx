// import { useState } from 'react'
import { useState } from 'react';
import './App.css'
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import ProvaState from '../components/ProvaState';



function App() {
  const [count, setCount] = useState(99);

  const [birds, modBirds] = useState([
    {
      id: 0,
      nome: "Tucano",
      description: "Are you Toucan to me?",
      imgURL: "https://images.unsplash.com/photo-1618191702724-1e413e177fde?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isSpotted: true,
      comment: "I tucani della Guinness"
    },
    {
      id: 1,
      nome: "Flamingo",
      description: "Come sono belli i fenicotteri",
      imgURL: "https://images.unsplash.com/photo-1497206365907-f5e630693df0?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isSpotted: false,
      comment: "Balliamo un flamenco ??"
    },
    {
      id: 2,
      nome: "Parrot",
      description: "Ti va di fare una chiacchierata ? ",
      imgURL: "https://images.unsplash.com/photo-1538440367084-0a21cb983cee?q=80&w=1105&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isSpotted: false,
      comment: "Cu cu chaaaaaa"
    },
    {
      id: 3,
      nome: "Pulcinella",
      description: "Non è napoletano ma comunque è bellissimo",
      imgURL: "https://images.unsplash.com/photo-1499054488849-3dd812295ef0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isSpotted: true,
      comment: "We we"
    }
  ])
  

  function salutaInConsole(){
    console.log("Ciao dalla console");
  }
 
  function handleChange(event){
    console.log(event);
    console.log(event.target.value);
  }

  function handleSubmit(event){
    // ATT: l'uso del preventDefault è necessario poiché siamo in una libreria fatta per costruire delle SPA (Single Page Application). Quindi la mia app non deve MAI ricaricare la pagina. 

    event.preventDefault();
    console.log(event);
  }

  const toggleIsSpotted = (birdID) =>{
    modBirds(prevBird => 
      prevBird.map(bird => 
        bird.id == birdID ? {...bird, isSpotted: !bird.isSpotted} : bird
      )
    )
  }
  return (
    <>


      <h1>Vite + React</h1>
      <Navbar></Navbar>
      <div className="card">
        <button onClick={() => setCount(count => count + 1)}>
          count is {count}
        </button>   

        <button onClick={() => {console.log("Ciao dal pulsantino")}}>
          Pulsantino
        </button>
      </div>

      <hr />

    <div className="card-container">
      {/* 
      Le card possono essere costruire nel seguente modo
      <Card
      title = "Tucano"
      imgURL = "https://images.unsplash.com/photo-1618191702724-1e413e177fde?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      description = "Are you Toucan to me?"
      isSpotted = {true}>
          Questo è il children, cioè il vero figlio di Card
      </Card> */}

      {/* Voglio costruire le card a partire dai dati presenti qui nel parent */}
      {/* ATT: il metodo map è l'unica alternativa al forEach che nel caso di React non può essere utilizzato. Questo perché mentre il map restituisce un array che JSX è in grado di renderizzare, il forEach non restituisce nulla per JSX */}
      {birds.map(bird => (
        <Card
        key={bird.id}
        title={bird.nome}
        imgURL={bird.imgURL}
        description={bird.description}
        isSpotted={bird.isSpotted}
        onToggleSpotted = {() => toggleIsSpotted(bird.id)}>
        {bird.comment}
        </Card>
      )) }

    </div>

    <div className="clearfix"></div>
    <hr />

    <h2>Raccolta avvistati</h2>
    <div className="card-container">

      {birds
      .filter(bird => bird.isSpotted)
      .map(bird => (
        <Card
        key={bird.id}
        title={bird.nome}
        imgURL={bird.imgURL}
        description={bird.description}
        isSpotted={bird.isSpotted}>
        </Card>
      ))}
    </div>


    <h1>Eventi al volo</h1>

    {/* Parto con la gestione di eventi attraverso funzioni anonime */}
     
     <div className="card-container">
      <div className="card">
          <button onClick={()=>{
            // Qui richiamo la funzione setCount
            setCount(count => count + 1)
            alert("Hai appena cliccato sul pulsante")
          }} >
            Contatore: {count}
          </button>
      </div>

      {/* Uso una funzione definita in alto */}
      <div className="card">
        {/* Attenzione, rispetto al passato quando si utilizzava onclick all'interno dello html, in questo caso non posso usare () come nell'addEventListener */}
        <button onClick={salutaInConsole}>Saluta in Console</button>
      </div>

      <div className="card">
        {/* gestisco un campo input al change */}
          <input type="text" onChange={handleChange}/>
      </div>

      <div className="card">
        {/* Gestire un evento submit SU UN PICCOLO form*/}
        <form onSubmit={handleSubmit}>

            <button type='submit'>Sub</button>

        </form>
      
      </div>

     </div>

     <hr />
     <h3>USE State</h3>
     <div className="card-container">
          <ProvaState></ProvaState>
     </div>
    </>
  )
}

export default App
