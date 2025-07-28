import './Card.css'



function Card({nome, cognome, eta, professione}){


    return(
        <div className='card'>
            <p>{nome} {cognome}</p>
            <p>{eta}</p>
            <p>{professione}</p>
        </div>)
}

export default Card;