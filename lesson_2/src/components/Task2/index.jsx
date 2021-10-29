import React, {Component} from 'react';
import './style.scss'
import axios from 'axios'
import User from "@components/User";


export class Task2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            error: ''
        }
    }

    changeInterviewed = (id) => {
        console.log(id)
        const user = this.state.users.filter(user => user.id === id)
        user.interviewed = !user.interviewed


        this.setState({
            ...this.state,
            users: [
                ...user,
                ...this.state.users
            ]
        })
    }

    getUsers = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            console.log(response.data);
            this.setState({
                ...this.state,
                users: response.data.map(user => ({
                        interviewed: false,
                        ...user,

                    })
                )
            })
        } catch (error) {
            console.error(error);
            this.setState({
                ...this.state,
                error: {
                    status: error.response.status,
                    msg: 'not found'
                }
            })
        }
    }

    componentDidMount() {
        this.getUsers()
    }

    render() {
        const {users, error} = this.state
        const {changeInterviewed} = this
        return (
            <>
                <h1>Task 2</h1>

                {
                    users.map(user =>
                        <User key={user.id} action={changeInterviewed} user={user}/>
                    )
                }

                {error ? <div>{error.msg}</div> : <></>}
            </>
        );
    }
}
