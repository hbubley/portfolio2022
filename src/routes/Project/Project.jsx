import React from 'react'
import { useParams } from 'react-router-dom'

const Project = () => {
    const param = useParams()
    console.log("🚀 ~ file: Project.jsx ~ line 6 ~ Project ~ param", param)

    return (
        <div></div>
    )
}

export default Project