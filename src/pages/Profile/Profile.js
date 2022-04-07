import React from 'react'
import classes from "styles/grid.module.css"
import { SideBar } from 'components'
import { useAuth } from 'context'
import styles from "./Profile.module.css"
const Profile = () => {
    const { firstName, lastName, email } = useAuth();
    return (
        <div>
            <div className='filter-products'>
                <div className={classes.grid_15_85}>
                    <SideBar />
                    <div className={styles.profile}>
                        <h2>Profile Details</h2>
                        <p>Name: {firstName} {lastName}</p>
                        <p>Email: {email}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Profile }