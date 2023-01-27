import UserInput from "./UserInput"
import styles from "./NewUser.module.css"


const NewUser = (props) => {

    const userHandler = (userData) => {
        const users = {
            ...userData,
            id: Math.random().toString()
        }

        props.users(users)
    }

    return (
        <div className={styles.newUser}>
            <UserInput onAddUser={userHandler} />
        </div>
    )
}


export default NewUser 