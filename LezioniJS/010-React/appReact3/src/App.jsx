import { useState } from 'react'
import Card from '../components/Card'
import CardForm from '../components/CardForm'
import './App.css'

function App() {


  const [birds, setBirds] = useState([
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
  ]);


  // Questa funzione usata nel prop di CardForm prende un newBird in ingresso. Questo newBird vive nel child non nel parent
  const addBird = (newBird) => {
      setBirds([...birds, newBird]);
  }

  return (
    <>

      <h1>App BIRD WATCHING</h1>

      <div className="card-container">


        {birds.map((bird) => (
          <Card
            key={bird.id}
            title={bird.nome}
            imgURL={bird.imgURL}
            description={bird.description}
            isSpotted={bird.isSpotted}>
            {bird.comment}
          </Card>
        ))}

      </div>

      <div className="clearfix"></div>
      <hr />

      <div className="card-container">
        {/*       propCHILD = propParent */}
        <CardForm addBird={addBird}></CardForm>
      </div>
    </>
  )
}

export default App
