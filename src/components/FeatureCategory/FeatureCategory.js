import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './FeatureCategory.module.css'

const FeatureCategory = () => {
    const [category, setCategory] = useState([])
    useEffect(() => {
        (async () => {
            const { data: { categories } } = await axios.get("/api/categories");
            setCategory(categories);
        })()
    }, [])

    return (
        <section className="featured">
            <h2 className={`${styles["featured-title"]} featured-title`}>Featured category</h2>
            <div className={`${styles["grid-4-column"]} grid-4-column test-text-overlay featured-list`}>
                {category.map(({ _id, image, categoryName }) => <Link to="/products" key={_id}>
                    <div className={` ${styles["card-vertical"]}`}>
                        <div className="overlay-container">
                            <div className="image-container">
                                <img
                                    src={image}
                                    alt={categoryName}
                                    className={`${styles["category-image"]} card-image category-image`}
                                />
                            </div>
                        </div>
                    </div>
                </Link>)}
            </div>
        </section>
    )
}

export { FeatureCategory }