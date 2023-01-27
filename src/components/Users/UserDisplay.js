import styles from "../Users/UserDisplay.module.css"

const UserDisplay = (props) => {

    const text = "years old"


    return (
        <ul>
            <li className={styles.userOutput}>{props.name} ({props.age} {text})</li>  
        </ul>
    )
}



export default UserDisplay