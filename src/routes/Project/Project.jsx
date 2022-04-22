import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import styles from './Project.module.scss'
import Card from '../../components/Card/Card';
const Project = ({ data }) => {
    const { id } = useParams();
    const [project, setProject] = useState()
    useEffect(() => {
        const _project = data.find((d) => `${d.id}` === `${id}`)
        setProject(_project)
        console.log("🚀 ~ file: Project.jsx ~ line 8 ~ Project ~ project", project, data, id)
    }, [data, id])
    return (
        <div className={styles.container}>
            <p className={styles.headingText}>{project?.title}</p>
            <div>
            </div>
        </div>
    )
}

export default Project