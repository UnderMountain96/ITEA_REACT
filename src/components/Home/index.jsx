import React, {Component} from 'react';
import {Markdown} from "react-marked-renderer";
import './style.scss'
import 'github-markdown-css/github-markdown.css'


export class Home extends Component {
    state = {
        markdown: ''
    }

    componentDidMount() {
        const readmePath = require("../../README.md");
        fetch(readmePath.default)
                .then(response => {
                    return response.text()
                })
                .then(text => {
                    this.setState({
                        markdown: text
                    })
                })
                .catch(err => {
                    console.error(err)
                })
    }


    render() {
        const {markdown} = this.state;

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
}
