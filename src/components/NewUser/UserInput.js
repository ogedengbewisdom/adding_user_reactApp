import { useState } from "react"
import styles from "./UserInput.module.css"

const UserInput = (props) => {

    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [validName, setValidName] = useState(true)
    const [validAge, setValidAge] = useState(true)


    const nameInputHandler = (event) => {
        setName(event.target.value)
    }

    const ageInputHandler = (event) => {
        setAge(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault()
        if (name.trim().length === 0) {
            setValidName(false)
            return;
        } else if (Number(age) < 0 || age.trim().length === 0) {
            setValidAge(false)
            return
        }
        const userData = {
            name: name,
            age: age
        }
        props.onAddUser(userData)
        setName("")
        setAge("")
    }

    const cancelName = () => {
        setValidName(true)
    }
    const cancelAge = () => {
        setValidAge(true)
    }
   let testing = ''
   const ageText = `Please enter a valid age (> 0).`

   if (!validAge) {
    testing = 
    <div className={styles.backdrop}>
        <div className={styles.cont}>
            <header>
                <h3>Invalid input</h3>
            </header>
            <main>
                <p>{ageText}</p>
            </main>
            <div className={styles.button}>
                <button onClick={cancelAge}  type="button">Okay</button>
            </div>
        </div>
    </div>
}


    
    if (!validName) {
        testing = 
        <div className={styles.backdrop}>
            <div className={styles.cont}>
                <header>
                    <h3>Invalid input</h3>
                </header>
                <main>
                    <p>Please enter a valid name and age (non empty values).</p>
                </main>
                <div className={styles.button}>
                    <button onClick={cancelName}  type="button">Okay</button>
                </div>
            </div>
        </div>
    }

    

    return (
        <div>
                <div>
                        <form onSubmit={submitHandler}>
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" onChange={nameInputHandler} value={name} />

                            <label htmlFor="age">Age (years)</label>
                            <input type="number" id="age" onChange={ageInputHandler} value={age} />

                            <button type="submit">Add User</button>
                        </form>
                </div>

                {testing}
        </div>
    
    )
}

export default UserInput