import { useState } from "react";

function FormProva({stampaUser}){

    // quest'oggetto deve corrispondere a quello del form
    const [user, setUser] = useState({
        nome: "",
        cognome: ""
    })

    const handleChange = (event) =>{
        // name e value sono rispettivamente la chiave e il valore dei singoli
        const{name, value} = event.target; // <input name = "nome" value = "Dario"

        setUser({
            ...user,
            [name]: value
        })

        // esempio di destructuring
        // questo è il modo tradizionale
        // const obj = {nome: "Dario", age: 36};
        // const nome = obj.nome;
        // const age = obj.age;
        // console.log(nome, age);
        
        // questo è il nuovo modo utilizzando la destructuring
        // const obj = {nome: "Dario", age: 36};
        // const {nome, age} = obj;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event);
        console.log(event.target[0].value);
        console.log(event.target[1].value);
        
        stampaUser(user);
    }
    return(
        <>
            <div className="card">
                <form onSubmit={handleSubmit}>
                    <label>Nome</label>
                    <input 
                        type="text" 
                        name="nome"
                        value={user.nome}
                        onChange={handleChange}/>
                        
                    
                    <label>Cognome</label>
                    <input 
                        type="text" 
                        name="cognome"
                        value={user.cognome}
                        onChange={handleChange}/>

                    <input type="submit" value="Invia"/>
                </form>
            </div>

        </>
    )
}

export default FormProva;