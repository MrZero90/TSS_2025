import './Card.css'



function Card({listItem, itemDate}){


    return(
        <div className='card'>
            <p>{listItem}</p>
            <p>{itemDate}</p>
        </div>)
}

export default Card;