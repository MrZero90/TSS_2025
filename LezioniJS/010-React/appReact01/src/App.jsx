import './App.css'
import Navbar from './components/Navbar';

function miaFunz(){
  return 0;
}

function App() {
  let nomeUser = "Dario";
  console.log("Ciao da dentro l'app di ", nomeUser);
  miaFunz();

  return ( 
    <>
    
    {/* Il nome del component è il nome esatto della funzione */}
      <Navbar></Navbar>
      <h1>Mia APP
        <span> di {nomeUser.toLocaleUpperCase()} </span>
      </h1>
      <p></p>
    </>
  )
}

export default App
