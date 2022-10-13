import React from "react";
import { useParams } from "react-router-dom";

const SinglePage = () => {
    console.log(useParams())
    const aboutData = [
        {
            slug: "about-app",
            title: "About the app",
            description: "Hello, this is a todo app, you can edit, add or remove a list",
        },
        {
            slug: "about-author",
            title: "About the Author",
            description: "This is rewrite by me",
        }
    ]
    const {slug} = useParams()
    const aboutContent = aboutData.find(item => item.slug === slug)
    const {title, description} = aboutContent
    return (
        <div className="main_content">
            <h1>{title}</h1>
            <h1>{description}</h1>
        </div>
    )
}

export default SinglePage;