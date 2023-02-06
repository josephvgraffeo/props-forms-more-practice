import { useState } from "react";

export default function UserForm() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [favColor, setFavColor] = useState("");
    const [date, setDate] = useState("");

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleFavColor = (e) => {
        setFavColor(e.target.value);
    }

    const handleDate = (e) => {
        setDate(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        alert(`Your name is ${firstName} ${lastName}. Your email is ${email}. Your favorite color is ${favColor}. Today's date is ${date}`);

        console.log("firstName: ", firstName);
        console.log("lastName: ", lastName);
        console.log("email: ", email);
        console.log("favColor: ", favColor);
        console.log("date: ", date);
    }



    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="firstName">First Name:</label>
                    <input 
                    type="text" 
                    name="firstName"
                    value={firstName}
                    onChange={handleFirstName}/>
                </div>

                <div>
                    <label htmlFor="lastName">Last Name:</label>
                    <input 
                    type="text" 
                    name="lastName"
                    value={lastName}
                    onChange={handleLastName}/>
                </div>

                <div>
                    <label htmlFor="email">Email:</label>
                    <input 
                    type="email" 
                    name="email"
                    value={email}
                    onChange={handleEmail}/>
                </div>

                <div>
                    <label htmlFor="favColor">Favorite Color:</label>
                    <input 
                    type="color" 
                    name="favColor"
                    value={favColor}
                    onChange={handleFavColor}/>
                </div>    

                <div>
                    <label htmlFor="date">Date</label>
                    <input 
                    type="date" 
                    name="date"
                    value={date}
                    onChange={handleDate}/>
                </div>

                <input type="submit" value="submit form" />
            </form>
        </>
    )
}