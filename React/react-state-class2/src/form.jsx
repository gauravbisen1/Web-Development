import { useState } from "react";

export default function Form(){
    let [formData , setFormData] = useState({
        fullName:"",userName:"",password:""});

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
        setFormData({fullName:"",userName:"",password:""});
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullname">Full Name: </label>
            <input placeholder="enter your full name" type="text" value={formData.fullName} onChange={handleInputChange} id="fullname" name="fullName"/>
            <br /><br />

            <label htmlFor="username">User Name: </label>
            <input placeholder="enter your username" type="text" value={formData.userName} onChange={handleInputChange} id="username" name="userName"/>
            <br /><br />

            <label htmlFor="password">Password: </label>
            <input placeholder="enter password" type="password" value={formData.password} onChange={handleInputChange} id="password" name="password"/>
            <br /><br />

            <button>Submit</button>
        </form>
    );
}