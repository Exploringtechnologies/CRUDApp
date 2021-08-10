import React, { useState } from 'react'
import "./style.css";

const Enquiry = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [fname, setFname] = useState("");
    const [em, setEm] = useState("");
    const [ag, setAg] = useState("");
    // const [items, setItems] = useState([]);

    // add the items


    const onSubmits = (event) => {
        event.preventDefault();
        if ((!name) || (!email) || (!age)) {
            alert("Please fill the data")
        } else {
            setFname(name);
            setEm(email);
            setAg(age);
        }
        setName("");
        setEmail("");
        setAge("");

    }

    // const onDefault = (event) => {
    //     event.preventDefault();
    // }

    const inputEventName = (event) => {
        console.log(event.target.value);
        setName(event.target.value);
    }
    const inputEventEmail = (event) => {
        console.log(event.target.value);
        setEmail(event.target.value);
    }
    const inputEventAge = (event) => {
        console.log(event.target.value);
        setAge(event.target.value);
    }

    // const addItem = () => {
    //     if ((!name) || (!email) || (!age)) {
    //         alert("Please fill the data")
    //     } else {
    //         setName("");
    //         setEmail("");
    //         setAge("");
    //     }
    // }
    return (
        <>
            <div className="main-div">
                <div className="htmlform">
                    <div className="addItems">
                        <form onSubmit={onSubmits}>
                            <h1 className="welcome">Please Input details </h1>
                            <label>
                                <input type="text" placeholder="enter your name" value={name} onChange={inputEventName} /><br />

                                <input type="text" placeholder="email" value={email} onChange={inputEventEmail} /><br />

                                <input type="text" placeholder="age" value={age} onChange={inputEventAge} /><br />
                            </label>
                            <button className="sub effect04" data-sm-link-text="Approve" onClick={onSubmits} >
                                <span> Submit</span></button>
                        </form>
                    </div>
                    {/* show our item */}
                    <div className="showItems addItems" >
                        <div className="eachItem">
                            <h3>{fname} <br /> </h3>
                            <h3>{ag}</h3>
                            <h3>{em}</h3>
                            <div><i className="fas fa-edit"></i>
                                <i className="fas fa-trash-alt"></i></div>



                        </div>
                    </div>

                    {/* remove all button
                    <div className="showItems"><button type="button" className="btn effect04" data-sm-link-text="Remove All">
                        <span> Check List</span></button></div> */}

                </div>
            </div>

        </>
    )
}

export default Enquiry
