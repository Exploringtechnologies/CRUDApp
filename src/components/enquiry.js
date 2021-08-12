import React, { useState, useEffect } from 'react'
import "./style.css";

const getLocalData = () =>{
    const lists = localStorage.getItem("storage");

    if(lists){
        return JSON.parse(lists);
    } else {
        return [];
    }
}

const Enquiry = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [items, setItems] = useState(getLocalData());
    const [iseditItems, setIsEditItem] = useState("");
    const [toggleButton, setToggleButton] = useState(false);
    // add the items


    const onSubmits = (event) => {
        if ((!name) || (!email) || (!age)) {
            alert("Please fill the data")
        } else if((name && email && age) && (toggleButton)){
            setItems(
                items.map((val) => {
                    if(val.id === iseditItems){
                        return {...val, "name": name, "email": email, "age": age};
                    }
                    return val;
                })
            );
            setName("");
            setEmail("");
            setAge("");
            setIsEditItem(null);
            setToggleButton(false);

        } 
        else {
            setItems([...items, { "id": Math.random().toString().slice(2,11), "name": name, "email": email, "age": age }])
        }
        setName("");
        setEmail("");
        setAge("");

    }

    useEffect(() => {
        localStorage.setItem("storage", JSON.stringify(items))
    }, [items])

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

    const preventReload = (event) => {
        event.preventDefault();
    }

    // edit the current data card
    const editItems = (index) => {
        const items_card_search_id = items.find((val) => {
            return val.id === index;
        });
        setName(items_card_search_id.name);
        setEmail(items_card_search_id.email);
        setAge(items_card_search_id.age);
        setIsEditItem(index);
        setToggleButton(true);
    }

    // delete Item in card
    const deleteItem = (index) => {
        const updatedItem = items.filter((val) =>{
            return val.id !== index;
        });
        setItems(updatedItem);
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
                        <form onSubmit={preventReload}>
                            <h1 className="welcome">Please Input details </h1>
                            <label>
                                <input type="text" placeholder="enter your name" value={name} onChange={inputEventName} /><br />

                                <input type="text" placeholder="email" value={email} onChange={inputEventEmail} /><br />

                                <input type="text" placeholder="age" value={age} onChange={inputEventAge} /><br />
                            </label>
                            {toggleButton ? <button className="sub effect05"  data-sm-link-text="Done" onClick={onSubmits} >
                                <span> Update</span></button> : <button className="sub effect04" data-sm-link-text="Approve" onClick={onSubmits} >
                                <span> Submit</span></button> }
                        </form>
                    </div>
                    {/* show our item */}
                    <div className="showItems addItems" >

                        {items.map((val) => {
                            return (
                                <>
                                    <div className="eachItem" key={val.id}>
                                        <h3 >{val.name}</h3>
                                        <h3 >{val.email}</h3>
                                        <h3 >{val.age}</h3>
                                        <div><i className="fas fa-edit" onClick={() => editItems(val.id)}></i>
                                            <i className="fas fa-trash-alt" onClick={() => deleteItem(val.id)}></i></div>
                                    </div>
                                </>
                            );
                        })}


                    </div>
                    <h3> <br /> </h3>

                    {/* remove all button
                    <div className="showItems"><button type="button" className="btn effect04" data-sm-link-text="Remove All">
                        <span> Check List</span></button></div> */}

                </div>
            </div>

        </>
    )
}

export default Enquiry
