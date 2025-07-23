// Per adesso questo form è finto, cioè non prende ancora i dati partendo dai campi input.

import { useState } from "react";

//OSS. In questo file spiego come è possibile passare dei dati dal CHILD -> PARENT

function CardForm({addBird}){ //questo è un prop

    let id = 3;
    const [nome, setNome] = useState("");
    const [description, setDescription] = useState("");
    const [imgURL, setImgURL] = useState("");
    const [isSpotted, setIsSpotted] = useState(false);
    const [comment, setComment] = useState("");
    
    const handleClick = () =>{

        if(!nome || !description || !imgURL)  {
            
            return;
        }
        id++;
        const bird = {
            id: id,
            nome: nome,
            description: description,
            imgURL: imgURL,
            isSpotted: isSpotted,
            comment: comment
        }

        addBird(bird);     
        
        setNome("");
        setDescription("");
        setImgURL("");
        setIsSpotted(false);
        setComment("");
    }

    return(
        <div className="card">
            <h3>Aggiungi</h3>
            <input type="text" placeholder="nome" value={nome} onChange={(e) => setNome(e.target.value)} />
            <input type="text" placeholder="description" value={description} onChange={(e) => setDescription(e.target.value)} />
            <input type="text" placeholder="imgURL" value={imgURL} onChange={(e) => setImgURL(e.target.value)} />
            <input type="text" placeholder="comment" value={comment} onChange={(e) => setComment(e.target.value)} />
            <button onClick={handleClick} > Aggiungi Volatile</button>
        </div>
    )
}

export default CardForm