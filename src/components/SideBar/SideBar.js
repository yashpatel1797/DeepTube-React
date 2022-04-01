import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from "./SideBar.module.css"
import { sideBar } from 'Data/sidebar'
const SideBar = () => {
    return (
        <>
            <aside className={styles.sidebar}>
                <ul className={styles.sidebar__links}>
                    {sideBar.map(({ name, iconName, path }) => (
                        <li key={name}>
                            <NavLink
                                to={path}

                                className={({ isActive }) => `${styles.sidebar__link_item} ${isActive ? styles.active__link : ""
                                    }`}
                            >
                                <span className={`${styles.sidebar__icon} material-icons`}>{iconName}</span>
                                {name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </aside>
        </>
    )
}

export { SideBar }