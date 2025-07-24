import { useState } from "react";

function FormCard(){

    const initialState = {
        listItem : "",
        itemDate : ""
    }
    const [formData, setFormData] = useState(initialState);

    const handleInputChange = (event) =>{
        const {name, value} = event.target;

        setFormData(
            {
                ...formData,
                [name]: value
            }
        );

    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        const item = {
            id: Math.random()*100,
            listItem: formData.listItem,
            itemDate: formData.itemDate
        }

    }

    return(
        <>
            <div className="card">
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>listItem</label>
                        <input type="text"
                        name="listItem"
                        value={formData.listItem} 
                        placeholder="What do you have to do?"
                        onChange={handleInputChange}/>
                    </div>
                    <div>
                        <label>itemDate</label>
                        <input type="text"
                        name="itemDate"
                        value={formData.itemDate} 
                        placeholder="When do you have to do it?"
                        onChange={handleInputChange}/>
                    </div>
                    <button type="submit">Add to list</button>
                </form>
            </div>
        
        </>

    )

}

export default FormCard;