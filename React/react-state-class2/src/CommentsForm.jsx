import { useState } from "react";

export default function CommentsForm(){
    let [formData , setFormData] = useState({
        username:"",remarks:"",rating:""});

    //onChangeHandler
    let handleInputChange = (event) =>{
        let fieldName = event.target.name;//directly also used without variable
        let newValue = event.target.value;

        setFormData((currData)=>{
            //currData[fieldName] = newValue;
            return {...currData, [fieldName] : newValue};
        });
    };
    let handleSubmit = (event) =>{
        event.preventDefault();
        console.log(formData);
        setFormData({username:"",remarks:"",rating:""});
    }
    return (
        <div>
            <h4>Give a comment</h4>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">User Name: </label>
                <input placeholder="username" type="text" value={formData.username} onChange={handleInputChange} id="username" name="username"/>
                <br /><br />
                <label htmlFor="remarks" >Remarks: </label>
                <textarea cols="30" rows="10" value={formData.remarks} onChange={handleInputChange} id="remarks" name="remarks">Remarks</textarea><br />
                <label htmlFor="rating" >Rating: </label>
                <input placeholder="rating" type="number" min={1} max={5} value={formData.rating} onChange={handleInputChange} id="rating" name="rating"/><br /><br />
                <button>add comment</button>
            </form>
        </div>
    );
}