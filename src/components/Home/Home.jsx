import React, {useState, useEffect} from 'react';
import {Markdown}                   from "react-marked-renderer";
import './Home.style.scss'
import 'github-markdown-css/github-markdown.css'


export const Home = () => {
    const [markdown, setMarkdown] = useState('')

    useEffect(() => {
        const readmePath = require("../../README.md");
        fetch(readmePath.default)
                .then(response => {
                    return response.text()
                })
                .then(text => {
                    setMarkdown(text)
                })
                .catch(err => {
                    console.error(err)
                })
    })

    return (
            <>
                <h1>Home</h1>
                <div className='home'>
                    <div className='markdown-body'>
                        <Markdown markdown={markdown}/>
                    </div>
                </div>
            </>
    )
}
