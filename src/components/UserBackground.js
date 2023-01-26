import styles from "./UserBackground.module.css"
import UserDisplay from "./UserDisplay"

const UserBackground = (props) => {
    
    return (
        <div>
            <div className={styles.container}>
                {props.item.map(users => <UserDisplay name={users.name} age={users.age}/>)}
            </div>
        </div>
    )
}


export default UserBackground