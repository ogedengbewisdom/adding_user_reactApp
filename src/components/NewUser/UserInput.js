import { useState } from "react"
import styles from "./UserInput.module.css"

const UserInput = () => {

    const [name, setName] = useState("")
    const [age, setAge] = useState("")

    const nameInputHandler = (event) => {
        setName(event.target.value)
    }

    const ageInputHandler = (event) => {
        setAge(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault()
        
  
    }

    return (
        <form onSubmit={submitHandler}>
        <label>Username</label>
        <input type="text" id="username" onChange={nameInputHandler} />

        <label>Age (years)</label>
        <input type="number" id="age" onChange={ageInputHandler} />

        <button type="submit">Add User</button>
    </form>
    )
}

export default UserInput