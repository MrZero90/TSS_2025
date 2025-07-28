import { useEffect, useState } from 'react'
import FormCard from '../components/FormCard'
import './App.css'
import Card from '../components/Card';
import CardUsers from "../components/CardUsers"

function App() {

  const [toDoListItems, setToDoListItem] = useState([
    {
      // id: 0,
      // listItem: "Andare a pranzo con zia",
      // itemDate: "20/08/2025"
    }
  ]);
  const [toDoUrl, setToDoUrl] = useState("http://localhost:3000/toDoItems");

    useEffect(() =>{
    let ignore = false;
    if(!ignore){
      getToDoItems(toDoUrl);
    }
    return () => {
      ignore = true;
    };
  },[toDoUrl])

  function addToDb(){
    const URL = toDoUrl;

    // uso la fetch con il metodo post per registrare un viaggio nel carrello
    fetch(URL,{
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        // dentro il body passo l'oggetto formato json (string) che voglio registrare
        // body: JSON.stringify(item)
        body: { 
            "id": Math.ceil(Math.random()*100),
            "listItem": "Andare a pranzo con zia",
            "itemDate": "20/08/2025"
          }
    })
    .then(data => {
        console.log(data);
    })


}

  async function getToDoItems(url) {
  const response = await fetch(url);
  const jsonResponse = await response.json();
  setToDoListItem(jsonResponse);
  console.log(jsonResponse);
} 

  const addItemToList = (item) => {
    setToDoListItem([...toDoListItems, item]);
  }

  
  const [userDatas, setUserDatas] = useState([]);
  const [url, setUrl] = useState("http://localhost:3000/users");

  const chooseURL = (dest) =>{
    let newUrl = `${dest}`;
    setUrl(newUrl);
  }
  
  async function getUsers(url) {
  const response = await fetch(url);
  const jsonResponse = await response.json();
  setUserDatas(jsonResponse);
  console.log(jsonResponse);
} 

  useEffect(() =>{
    let ignore = false;
    if(!ignore){
      getUsers(url);
    }
    return () => {
      ignore = true;
    };
  },[url])


  return (
    <>
      <h1>App to do list</h1>

      <FormCard addItemToList={addItemToList}></FormCard>

      <hr />

      <div className='card-container'>
        {
          toDoListItems.map((item) =>(
          <Card
          key={item.id}
          id={item.id}
          listItem={item.listItem}
          itemDate={item.itemDate}
          ></Card>
          )
          )
        }
      </div>

      <hr />

      <div>
        {/* <button type="submit" onSubmit={chooseURL(url=="http://localhost:3000/users")? url : "http://localhost:3000/msgs"}></button> */}
        {/* <form onSubmit={chooseURL(url==="http://localhost:3000/users")? url : "http://localhost:3000/msgs"}> */}

          {/* <button type="submit">Cambia</button>
        </form> */}
        <button type="submit" addToDb >Cambia</button>
        {
          userDatas.map((user) =>(
          <CardUsers 
          key={user.id}
          nome={user.nome}
          cognome={user.cognome}
          eta={user.eta}
          professione={user.professione}
          ></CardUsers>
          )
          )
        }
      </div>
      

        
    </>
  )
}

export default App
