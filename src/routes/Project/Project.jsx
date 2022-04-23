import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import styles from './Project.module.scss'
import Card from '../../components/Card/Card';
const Project = ({ data }) => {
    const { id } = useParams();
    const [project, setProject] = useState();
    const [imageInFocus, setImageInFocus] = useState();
    const [images, setImages] = useState();

    useEffect(() => {
        const _project = data.find((d) => `${d.id}` === `${id}`)
        setProject(_project);
        if (_project?.images) {
            const _images = JSON.parse(_project.images)
            if (_images.length) {
                setImages(_images)
                setImageInFocus(_images[0])
            }
        }
    }, [data, id])
    return (
        <div className={styles.container}>
            <p className={styles.headingText}>{project?.title}</p>
            <div className={styles.descriptionContainer}>
                <p className={styles.description}>{project?.description}</p>
            </div>
            <div>
                <img className={styles.imageInFocus} src={imageInFocus?.src} />
                <p className={styles.imageInFocusCaption}>{imageInFocus?.caption}</p>
            </div>
            <div className={styles.imagesContainer}>
                {images?.length > 0 && images.map((image) => {
                    return <div className={styles.image} onClick={() => setImageInFocus(image)} style={{ backgroundImage: `url(${image.src})` }} ></div>
                })}
            </div>
        </div >
    )
}

export default Project