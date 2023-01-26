import UserInput from "./UserInput"
import styles from "./NewUser.module.css"


const NewUser = () => {

    return (
        <div className={styles.newUser}>
            <UserInput />
        </div>
    )
}


export default NewUser 